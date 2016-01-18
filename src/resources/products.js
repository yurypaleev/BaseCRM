//  https://developers.getbase.com/docs/rest/reference/products

function Products(crm) {
    this.crm = crm;
}

Products.prototype.find = function(data) {
    if(typeof data === 'number') {
        return this.crm.find('products/' + data);
    }
    return this.crm.find('products', data);
};

Products.prototype.create = function(data) {
    return this.crm.create('products', data, 'product');
};

Products.prototype.update = function(id, data) {
    return this.crm.update('products/' + id, data);
};

Products.prototype.delete = function(id) {
    return this.crm.delete('products/' + id);
};

module.exports = Products;