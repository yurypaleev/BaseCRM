//  https://developers.getbase.com/docs/rest/reference/users

var extend = require('extend');

module.exports = function(client) {
    function User(data) {
        extend(this, data);
    }

    return extend(User, {
        find: function(params, callback) {
            return client.request.get('users', params, callback, this);
        },
        self: function(callback) {
            return client.request.get('users/self', callback, this);
        }
    });
};