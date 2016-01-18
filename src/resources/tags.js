//  https://developers.getbase.com/docs/rest/reference/tags

function Tags(crm) {
    this.crm = crm;
}

Tags.prototype.find = function(data) {
    if(typeof data === 'number') {
        return this.crm.find('tags/' + data);
    }
    return this.crm.find('tags', data);
};

Tags.prototype.create = function(data) {
    return this.crm.create('tags', data, 'tag');
};

Tags.prototype.update = function(id, data) {
    return this.crm.update('tags/' + id, data);
};

Tags.prototype.delete = function(id) {
    return this.crm.delete('tags/' + id);
};

module.exports = Tags;