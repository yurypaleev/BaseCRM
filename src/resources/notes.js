//  https://developers.getbase.com/docs/rest/reference/notes

function Notes(crm) {
    this.crm = crm;
}

Notes.prototype.find = function(data) {
    if(typeof data === 'number') {
        return this.crm.find('notes/' + data);
    }
    return this.crm.find('notes', data);
};

Notes.prototype.create = function(data) {
    return this.crm.create('notes', data, 'note');
};

Notes.prototype.update = function(id, data) {
    return this.crm.update('notes/' + id, data);
};

Notes.prototype.delete = function(id) {
    return this.crm.delete('notes/' + id);
};

module.exports = Notes;