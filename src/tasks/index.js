//  https://developers.getbase.com/docs/rest/reference/tasks

var extend = require('extend');
var readonly = ['id', 'creator_id', 'completed_at', 'overdue', 'created_at', 'updated_at'];

module.exports = function(client, model) {
    function Task(data) {
		return model(this, data, readonly);
    }

    extend(Task, {
        find: function(params, callback) {
            return client.request.get('tasks', params, callback, this);
        },
        create: function(data, callback) {
            return client.request.post('tasks', data, null, callback, this);
        },
        update: function(id, data, callback) {
            return client.request.put('tasks/' + id, data, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('tasks/' + id, callback);
        }
    });

    extend(Task.prototype, model.methods);

    return Task;
};