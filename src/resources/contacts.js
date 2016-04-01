//  https://developers.getbase.com/docs/rest/reference/contacts

function Contacts(crm) {
    this.crm = crm;
}

Contacts.prototype.find = function(data) {
    if(typeof data === 'number') {
        return this.crm.find('contacts/' + data);
    }
    return this.crm.find('contacts', data);
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

Contacts.prototype.upsert = function(data, params) {
    return this.crm.upsert('contacts', data, params);
};

module.exports = Contacts;
