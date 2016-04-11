//  https://developers.getbase.com/docs/rest/reference/deal_sources

function DealSources(crm) {
    this.crm = crm;
}

DealSources.prototype.find = function(params) {
    return this.crm.find('deal_sources', params);
};

DealSources.prototype.create = function(data) {
    return this.crm.create('deal_sources', data);
};

DealSources.prototype.update = function(id, data) {
    return this.crm.update('deal_sources/' + id, data);
};

DealSources.prototype.delete = function(id) {
    return this.crm.delete('deal_sources/' + id);
};

module.exports = DealSources;