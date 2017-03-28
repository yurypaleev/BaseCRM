//  https://developers.getbase.com/docs/rest/reference/products

var extend = require('extend');
var proto = require('../methods');

module.exports = function(client) {
    function Product(data) {
        extend(this, data);
    }

    extend(Product, {
        find: function(params, callback) {
            return client.request.get('products', params, callback, this);
        },
        create: function(data, callback) {
            return client.request.post('products', data, null, callback, this);
        },
        update: function(id, data, callback) {
            return client.request.put('products/' + id, data, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('products/' + id, callback);
        }
    });

    extend(Product.prototype, proto);

    return Product;
};