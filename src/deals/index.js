//  https://developers.getbase.com/docs/rest/reference/deals

var extend = require('extend');
var readonly = ['id', 'creator_id', 'last_stage_change_by_id', 'last_activity_at', 'dropbox_email', 'organization_id', 'created_at', 'updated_at'];

module.exports = function(client, model) {
    function Deal(data) {
		return model(this, data, readonly);
    }

    extend(Deal, {
		client: client,
		type: 'deal',

        find: function(params, callback) {
            return client.request.get('deals', params, callback, this);
        },
        create: function(data, callback) {
            return this.upsert(null, data, callback);
        },
        update: function(id, data, callback) {
            return client.request.put('deals/' + id, data, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('deals/' + id, callback);
        },
        upsert: function(params, data, callback) {
            return client.request.post('deals', data, params, callback, this);
        }
    });

    extend(Deal.prototype, model.methods, {
        findContacts: function(params, callback) {
            return client.associatedContacts.find(this.id, params, callback);
        },
        createContact: function(data, callback) {
            return client.associatedContacts.create(this.id, data, callback);
        },
        removeContact: function(contact, callback) {
            return client.associatedContacts.remove(this.id, contact instanceof client.associatedContacts ? contact.id : contact, callback);
        }
    });

    return Deal;
};