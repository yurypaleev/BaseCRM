//  https://developers.getbase.com/docs/rest/reference/orders

function Orders(crm) {
    this.crm = crm;
}

Orders.prototype.find = function(data) {
    if(typeof data === 'number') {
        return this.crm.find('orders/' + data);
    }
    return this.crm.find('orders', data);
};

Orders.prototype.create = function(data) {
    return this.crm.create('orders', data, 'order');
};

Orders.prototype.update = function(id, data) {
    return this.crm.update('orders/' + id, data);
};

Orders.prototype.delete = function(id) {
    return this.crm.delete('orders/' + id);
};

module.exports = Orders;