//  https://developers.getbase.com/docs/rest/reference/associated_contacts

function AssociatedContacts(crm) {
    this.crm = crm;
}

AssociatedContacts.prototype.find = function(dealId, params) {
    if(typeof dealId !== 'number') {
        dealId = dealId.id;
    }
    return this.crm.find('deals/' + dealId + '/associated_contacts', params);
};

AssociatedContacts.prototype.create = function(dealId, data) {
    if(typeof dealId !== 'number') {
        dealId = dealId.id;
    }
    return this.crm.create('deals/' + dealId + '/associated_contacts', data);
};

AssociatedContacts.prototype.remove = function(dealId, contactId) {
    if(typeof dealId !== 'number') {
        dealId = dealId.id;
    }
    return this.crm.delete('deals/' + dealId + '/associated_contacts/' + contactId);
};

module.exports = AssociatedContacts;