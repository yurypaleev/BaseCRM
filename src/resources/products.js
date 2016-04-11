//  https://developers.getbase.com/docs/rest/reference/products

function Products(crm) {
    this.crm = crm;
}

Products.prototype.find = function(params) {
    return this.crm.find('products', params);
};

Products.prototype.create = function(data) {
    return this.crm.create('products', data);
};

Products.prototype.update = function(id, data) {
    return this.crm.update('products/' + id, data);
};

Products.prototype.delete = function(id) {
    return this.crm.delete('products/' + id);
};

module.exports = Products;