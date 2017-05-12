//  https://developers.getbase.com/docs/rest/reference/users

var extend = require('extend');
var readonly = ['id', 'status', 'role', 'confirmed', 'creator_id', 'created_at', 'updated_at'];

module.exports = function(client, model) {
    function User(data) {
		return model(this, data, readonly);
    }

    return extend(User, {
		client: client,
        type: 'user',

        find: function(params, callback) {
            return client.request.get('users', params, callback, this);
        },
        self: function(callback) {
            return client.request.get('users/self', callback, this);
        }
    });
};