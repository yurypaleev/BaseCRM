//  https://developers.getbase.com/docs/rest/reference/notes

var extend = require('extend');
var proto = require('../methods');

module.exports = function(client) {
    function Note(data) {
        extend(this, data);
    }

    extend(Note, {
        find: function(params, callback) {
            return client.request.get('notes', params, callback, this);
        },
        create: function(data, callback) {
            return client.request.post('notes', data, null, callback, this);
        },
        update: function(id, data, callback) {
            return client.request.put('notes/' + id, data, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('notes/' + id, callback);
        }
    });

    extend(Note.prototype, proto);

    return Note;
};