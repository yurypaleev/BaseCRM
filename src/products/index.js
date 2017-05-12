//  https://developers.getbase.com/docs/rest/reference/products

var extend = require('extend');
var readonly = ['id', 'created_at', 'updated_at'];

module.exports = function(client, model) {
    function Product(data) {
		return model(this, data, readonly);
    }

    extend(Product, {
		client: client,
        type: 'product',

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

    extend(Product.prototype, model.methods);

    return Product;
};