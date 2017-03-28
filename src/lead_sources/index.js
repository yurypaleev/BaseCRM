//  https://developers.getbase.com/docs/rest/reference/lead_sources

var extend = require('extend');
var proto = require('../methods');

module.exports = function(client) {
    function Source(data) {
        extend(this, data);
    }

    extend(Source, {
        find: function(params, callback) {
            return client.request.get('lead_sources', params, callback, this);
        },
        create: function(data, callback) {
            return client.request.post('lead_sources', data, null, callback, this);
        },
        update: function(id, data, callback) {
            return client.request.put('lead_sources/' + id, data, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('lead_sources/' + id, callback);
        }
    });

    extend(Source.prototype, proto);

    return Source;
};