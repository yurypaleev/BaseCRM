//  https://developers.getbase.com/docs/rest/reference/contacts

var extend = require('extend');
var readonly = ['id', 'creator_id', 'created_at', 'updated_at'];

module.exports = function(client, model) {
    function Contact(data) {
		return model(this, data, readonly);
    }

    extend(Contact, {
        find: function(params, callback) {
            return client.request.get('contacts', params, callback, this);
        },
        create: function(data, callback) {
            return this.upsert(null, data, callback);
        },
        update: function(id, data, callback) {
            return client.request.put('contacts/' + id, data, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('contacts/' + id, callback);
        },
        upsert: function(params, data, callback) {
            return client.request.post('contacts', data, params, callback, this);
        }
    });

    extend(Contact.prototype, model.methods);

    return Contact;
};