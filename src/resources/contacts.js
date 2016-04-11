//  https://developers.getbase.com/docs/rest/reference/contacts

function Contacts(crm) {
    this.crm = crm;
}

Contacts.prototype.find = function(params) {
    return this.crm.find('contacts', params);
};

Contacts.prototype.create = function(data) {
    return this.crm.create('contacts', data);
};

Contacts.prototype.update = function(id, data) {
    return this.crm.update('contacts/' + id, data);
};

Contacts.prototype.delete = function(id) {
    return this.crm.delete('contacts/' + id);
};

Contacts.prototype.upsert = function(params, data) {
    return this.crm.upsert('contacts', params, data);
};

module.exports = Contacts;
