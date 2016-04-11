//  https://developers.getbase.com/docs/rest/reference/tags

function Tags(crm) {
    this.crm = crm;
}

Tags.prototype.find = function(params) {
    return this.crm.find('tags', params);
};

Tags.prototype.create = function(data) {
    return this.crm.create('tags', data);
};

Tags.prototype.update = function(id, data) {
    return this.crm.update('tags/' + id, data);
};

Tags.prototype.delete = function(id) {
    return this.crm.delete('tags/' + id);
};

module.exports = Tags;