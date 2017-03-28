//  https://developers.getbase.com/docs/rest/reference/leads

var extend = require('extend');
var proto = require('../methods');

module.exports = function(client) {
    function Lead(data) {
        extend(this, data);
    }

    extend(Lead, {
        find: function(params, callback) {
            return client.request.get('leads', params, callback, this);
        },
        create: function(data, callback) {
            return this.upsert(null, data, callback);
        },
        update: function(id, data, callback) {
            return client.request.put('leads/' + id, data, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('leads/' + id, callback);
        },
        upsert: function(params, data, callback) {
            return client.request.post('leads', data, params, callback, this);
        }
    });
    
    extend(Lead.prototype, proto);
    
    return Lead;
};