//  https://developers.getbase.com/docs/rest/reference/lead_sources

var extend = require('extend');
var readonly = ['id', 'creator_id', 'created_at', 'updated_at'];

module.exports = function(client, model) {
    function Source(data) {
		return model(this, data, readonly);
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

    extend(Source.prototype, model.methods);

    return Source;
};