var request = require('request');
var Promise = require('promise');
var extend = require('extend');
var path = require('path');

function transform(body, Model) {
    if(body.meta.type === 'collection') {
        return body.items.map(function(item) {
            return transform(item, Model);
        });
    }
    
    return Model instanceof Function ?
        new Model(body.data) :
        body.data;
}

function Request(options) {
    this.options = options;
}

Request.prototype = {
    headers: function(headers) {
        this.__headers = extend(this.__headers, headers);
        return this;
    },
    
    send: function(options, callback) {
        var req = this;
        var version = options.version || req.options.version;
        var headers = req.headers(options.headers).headers({
            'user-agent': 'BaseCRM/' + version + ' NodeJS/' + process.version,
            authorization: 'bearer ' + req.options.accessToken
        }).__headers;

        req.__headers = null;
        
        return new Promise(function(resolve, reject) {
            request({
                method: options.method,
                baseUrl: req.options.baseUrl,
                uri: path.join('/' + version, options.resource),
                body: options.data && {
                    data: options.data
                },
                qs: options.params,
                headers: headers,
                timeout: Math.max(0, options.timeout || req.options.timeout) * 1000,
                json: true
            }, function(err, res, body) {
                if(typeof body === 'object') {
                    if('errors' in body) {
                        err = body;
                        body = null;
                    } else try {
                        body = (options.transform || req.options.transform || transform)(body, options.Model) || body;
                    } catch(err) {}
                }

                if(!err && res.req.method === 'DELETE') {
                    body = true;
                }

                var result;
                if(callback instanceof Function && (result = callback(err, body)) !== void 0) {
                    body = result;
                }

                if(err) {
                    reject(err);
                } else
                if(body) {
                    resolve(body);
                }
            });
        });
    },
    
    get: function(resource, params, callback, Model) {
        var isId = typeof params === 'number';
        
        if(params instanceof Function) {
            Model = callback || Model;
            callback = params;
            params = null;
        }
    
        return this.send({
            resource: path.join(resource, isId ? '' + params : ''),
            params: isId ? null : params,
            Model: Model
        }, callback);
    },
    post: function(resource, data, params, callback, Model) {
        return this.send({
            method: 'POST',
            resource: path.join(resource, params && Object.keys(params).length ? 'upsert' : ''),
            params: params,
            data: data,
            Model: Model
        }, callback);
    },
    put: function(resource, data, callback, Model) {
        return this.send({
            method: 'PUT',
            resource: resource,
            data: data,
            Model: Model
        }, callback);
    },
    delete: function(resource, callback) {
        return this.send({
            method: 'DELETE',
            resource: resource
        }, callback);
    }
};

module.exports = Request;