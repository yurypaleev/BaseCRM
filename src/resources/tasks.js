//  https://developers.getbase.com/docs/rest/reference/tasks

function Tasks(crm) {
    this.crm = crm;
}

Tasks.prototype.find = function(params) {
    return this.crm.find('tasks', params);
};

Tasks.prototype.create = function(data) {
    return this.crm.create('tasks', data);
};

Tasks.prototype.update = function(id, data) {
    return this.crm.update('tasks/' + id, data);
};

Tasks.prototype.delete = function(id) {
    return this.crm.delete('tasks/' + id);
};

module.exports = Tasks;