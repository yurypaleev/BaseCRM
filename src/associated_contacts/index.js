//  https://developers.getbase.com/docs/rest/reference/associated_contacts

var extend = require('extend');
var readonly = ['created_at', 'updated_at'];

module.exports = function(client, model) {
    function AssociatedContact(data) {
		return model(this, data, readonly);
    }

    extend(AssociatedContact, {
        find: function(dealId, params, callback) {
            return client.request.get('deals/' + dealId + '/associated_contacts', params, callback, this);
        },
        create: function(dealId, data, callback) {
            return client.request.post('deals/' + dealId + '/associated_contacts', data, null, callback, this);
        },
        remove: function(dealId, id, callback) {
            return client.request.delete('deals/' + dealId + '/associated_contacts/' + id, callback);
        }
    });

    AssociatedContact.prototype.remove = function(dealId, callback) {
        return this.constructor.remove(dealId, this.id, callback);
    };
    
    return AssociatedContact;
};