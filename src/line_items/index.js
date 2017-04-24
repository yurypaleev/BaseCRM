//  https://developers.getbase.com/docs/rest/reference/line_items

var extend = require('extend');
var readonly = ['id', 'name', 'sku', 'description', 'creator_id', 'created_at', 'updated_at'];

module.exports = function(client, model) {
    function Item(data) {
		return model(this, data, readonly);
    }

    extend(Item, {
        find: function(orderId, params, callback) {
            return client.request.get('orders/' + orderId + '/line_items', params, callback, this);
        },
        create: function(orderId, data, callback) {
            return client.request.post('orders/' + orderId + '/line_items', data, null, callback, this);
        },
        remove: function(orderId, id, callback) {
            return client.request.delete('orders/' + orderId + '/line_items/' + id, callback);
        }
    });

    Item.prototype.remove = function(orderId, callback) {
        return this.constructor.remove(orderId, this.id, callback);
    };
    
    return Item;
};