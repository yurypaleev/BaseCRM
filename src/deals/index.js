//  https://developers.getbase.com/docs/rest/reference/deals

var extend = require('extend');
var proto = require('../methods');

module.exports = function(client) {
    function Deal(data) {
        extend(this, data);
    }

    extend(Deal, {
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

    extend(Deal.prototype, proto, {
        findContacts: function(params, callback) {
            return client.associatedContacts.find(this.id, params, callback);
        },
        createContact: function(data, callback) {
            return client.associatedContacts.create(this.id, data, callback);
        },
        removeContact: function(contactId, callback) {
            return client.associatedContacts.remove(this.id, contactId, callback);
        }
    });

    return Deal;
};