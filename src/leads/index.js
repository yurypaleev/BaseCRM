//  https://developers.getbase.com/docs/rest/reference/leads

var extend = require('extend');
var readonly = ['id', 'creator_id', 'created_at', 'updated_at'];

module.exports = function(client, model) {
    function Lead(data) {
		return model(this, data, readonly);
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
    
    extend(Lead.prototype, model.methods);
    
    return Lead;
};