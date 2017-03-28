//  https://developers.getbase.com/docs/rest/reference/orders

var extend = require('extend');
var proto = require('../methods');

module.exports = function(client) {
    function Order(data) {
        extend(this, data);
    }

    extend(Order, {
        find: function(params, callback) {
            return client.request.get('orders', params, callback, this);
        },
        create: function(data, callback) {
            return client.request.post('orders', data, null, callback, this);
        },
        update: function(id, data, callback) {
            return client.request.put('orders/' + id, data, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('orders/' + id, callback);
        }
    });

    extend(Order.prototype, proto, {
        findItems: function(params, callback) {
            return client.lineItems.find(this.id, params, callback);
        },
        createItem: function(data, callback) {
            return client.lineItems.create(this.id, data, callback);
        },
        removeItem: function(itemId, callback) {
            return client.lineItems.remove(this.id, itemId, callback);
        }
    });

    return Order;
};