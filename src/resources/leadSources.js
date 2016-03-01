//  https://developers.getbase.com/docs/rest/reference/lead_sources

function LeadSources(crm) {
    this.crm = crm;
}

LeadSources.prototype.find = function(data) {
    if(typeof data === 'number') {
        return this.crm.find('lead_sources/' + data);
    }
    return this.crm.find('lead_sources', data);
};

LeadSources.prototype.create = function(data) {
    return this.crm.create('lead_sources', data);
};

LeadSources.prototype.update = function(id, data) {
    return this.crm.update('lead_sources/' + id, data);
};

LeadSources.prototype.delete = function(id) {
    return this.crm.delete('lead_sources/' + id);
};

module.exports = LeadSources;