//  https://developers.getbase.com/docs/rest/reference/associated_contacts

var extend = require('extend');

module.exports = function(client) {
    function AssociatedContact(data) {
        extend(this, data);
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