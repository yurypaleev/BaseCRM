var request = require('request');
var qs = require('qs');

//  resources
var account = require('./resources/account');
var AssociatedContacts = require('./resources/associatedContacts');
var Contacts = require('./resources/contacts');
var DealSources = require('./resources/dealSources');
var Deals = require('./resources/deals');
var LeadSources = require('./resources/leadSources');
var Leads = require('./resources/leads');
var LineItems = require('./resources/lineItems');
var LossReasons = require('./resources/lossReasons');
var Notes = require('./resources/notes');
var Orders = require('./resources/orders');
var pipelines = require('./resources/pipelines');
var Products = require('./resources/products');
var stages = require('./resources/stages');
var Tags = require('./resources/tags');
var Tasks = require('./resources/tasks');
var Users = require('./resources/users');

function BaseCRM(options) {
    if(!(this instanceof arguments.callee)) {
        return;
    }

    this.options = {
        accessToken: '',
        baseUrl: 'https://api.getbase.com',
        userAgent: 'BaseCRM/v2 NodeJS/' + process.version,
        timeout: 30
    };

    for(var option in options) {
        if(options.hasOwnProperty(option) && (option in this.options)) {
            this.options[option] = options[option];
        }
    }

    this.account = account;
    this.associatedContacts = new AssociatedContacts(this);
    this.contacts = new Contacts(this);
    this.dealSources = new DealSources(this);
    this.deals = new Deals(this);
    this.leadSources = new LeadSources(this);
    this.leads = new Leads(this);
    this.lineItems = new LineItems(this);
    this.lossReasons = new LossReasons(this);
    this.notes = new Notes(this);
    this.orders = new Orders(this);
    this.pipelines = pipelines;
    this.products = new Products(this);
    this.stages = stages;
    this.tags = new Tags(this);
    this.tasks = new Tasks(this);
    this.users = new Users(this);
}

BaseCRM.prototype.request = function(options) {
    var clientOptions = this.options;

    if(typeof clientOptions.accessToken === 'string') {
        return new Promise(function(resolve, reject) {
            request({
                method: options.method,
                url: clientOptions.baseUrl + '/v2/' + options.resource + '?' + decodeURI(qs.stringify(options.params)),
                headers: {
                    'accept': 'application/json',
                    'user-agent': clientOptions.userAgent,
                    'authorization': 'bearer ' + clientOptions.accessToken
                },
                json: options.data,
                timeout: clientOptions.timeout * 1000
            }, function(error, response, body) {
                body = JSON.parse(body || 'null');

                if(error) {
                    reject(new Error(error));
                } else
                if(response.statusCode >= 200 && response.statusCode < 300) {
                    resolve(body);
                } else {
                    var err = new Error;
                    err.statusCode = parseInt(body.meta.http_status);
                    err.name = body.errors[0].error.code;
                    err.message = body.errors[0].error.message;
                    err.details = body.errors[0].error.details;
                    err.link = body.errors[0].meta.links.more_info;
                    reject(err);
                }
            });
        });
    } else {
        var err = new Error;
        err.name = 'token';
        err.message = 'token is bad';
        err.details = 'Required access token is missing, malformed, expired, or invalid.';
        return Promise.reject(err);
    }
};

BaseCRM.prototype.find = function(resource, params) {
    return this.request({
        method: 'GET',
        resource: resource,
        params: params
    }).then(function(res) {
        return Promise.resolve(res.items ? res.items.map(function(item) {
            return item.data;
        }) : res.data);
    });
};
BaseCRM.prototype.create = function(resource, data, metaType) {
    return this.createOrUpdate(resource, null, metaType ? {
        data: data,
        meta: {
            type: metaType
        }
    } : {
        data: data
    }).then(function(res) {
        return Promise.resolve(res.data);
    });
};
BaseCRM.prototype.createOrUpdate = function(resource, params, data) {
    return this.request({
        method: 'POST',
        resource: resource,
        params: params,
        data: data
    });
};
BaseCRM.prototype.update = function(resource, data) {
    return this.request({
        method: 'PUT',
        resource: resource,
        data: {
            data: data
        }
    }).then(function(res) {
        return Promise.resolve(res.data);
    });
};
BaseCRM.prototype.delete = function(resource) {
    return this.request({
        method: 'DELETE',
        resource: resource
    }).then(function() {
        return Promise.resolve(true);
    });
};

BaseCRM.version = require('../package').version;

module.exports = BaseCRM;