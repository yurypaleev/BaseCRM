//  https://developers.getbase.com/docs/rest/reference/tags

var extend = require('extend');
var proto = require('../methods');

module.exports = function(client) {
    function Tag(data) {
        extend(this, data);
    }

    extend(Tag, {
        find: function(params, callback) {
            return client.request.get('tags', params, callback, this);
        },
        create: function(data, callback) {
            return client.request.post('tags', data, null, callback, this);
        },
        update: function(id, data, callback) {
            return client.request.put('tags/' + id, data, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('tags/' + id, callback);
        }
    });

    extend(Tag.prototype, proto);

    return Tag;
};