//  https://developers.getbase.com/docs/rest/reference/deals

function Deals(crm) {
    this.crm = crm;
}

Deals.prototype.find = function(params) {
    return this.crm.find('deals', params);
};

Deals.prototype.create = function(data) {
    return this.crm.create('deals', data);
};

Deals.prototype.update = function(id, data) {
    return this.crm.update('deals/' + id, data);
};

Deals.prototype.delete = function(id) {
    return this.crm.delete('deals/' + id);
};

Deals.prototype.upsert = function(params, data) {
    return this.crm.upsert('deals', params, data);
};

module.exports = Deals;
