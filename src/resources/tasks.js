//  https://developers.getbase.com/docs/rest/reference/tasks

function Tasks(crm) {
    this.crm = crm;
}

Tasks.prototype.find = function(data) {
    if(typeof data === 'number') {
        return this.crm.find('tasks/' + data);
    }
    return this.crm.find('tasks', data);
};

Tasks.prototype.create = function(data) {
    return this.crm.create('tasks', data, 'task');
};

Tasks.prototype.update = function(id, data) {
    return this.crm.update('tasks/' + id, data);
};

Tasks.prototype.delete = function(id) {
    return this.crm.delete('tasks/' + id);
};

module.exports = Tasks;