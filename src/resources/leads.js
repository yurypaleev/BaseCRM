//  https://developers.getbase.com/docs/rest/reference/leads

function Leads(crm) {
    this.crm = crm;
}

Leads.prototype.find = function(data) {
    if(typeof data === 'number') {
        return this.crm.find('leads/' + data);
    }
    return this.crm.find('leads', data);
};

Leads.prototype.create = function(data) {
    return this.crm.create('leads', data);
};

Leads.prototype.update = function(id, data) {
    return this.crm.update('leads/' + id, data);
};

Leads.prototype.delete = function(id) {
    return this.crm.delete('leads/' + id);
};

Leads.prototype.upsert = function(data, params) {
    return this.crm.upsert('leads/upsert', data, params);
};

module.exports = Leads;
