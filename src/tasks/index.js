//  https://developers.getbase.com/docs/rest/reference/tasks

var extend = require('extend');
var proto = require('../methods');

module.exports = function(client) {
    function Task(data) {
        extend(this, data);
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

    extend(Task.prototype, proto);

    return Task;
};