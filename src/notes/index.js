//  https://developers.getbase.com/docs/rest/reference/notes

var extend = require('extend');
var readonly = ['id', 'creator_id', 'created_at', 'updated_at'];

module.exports = function(client, model) {
    function Note(data) {
		return model(this, typeof data === 'object' && data ? data : {
			content: data
		}, readonly);
    }

    extend(Note, {
        client: client,
        type: 'note',

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

    extend(Note.prototype, model.methods, {
		assignTo: function(item, callback) {
            return item.assignNote(this, callback);
		}
    });

    return Note;
};