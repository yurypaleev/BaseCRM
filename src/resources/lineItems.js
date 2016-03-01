//  https://developers.getbase.com/docs/rest/reference/line_items

function LineItems(crm) {
    this.crm = crm;
}

LineItems.prototype.find = function(orderId, data) {
    if(typeof orderId !== 'number') {
        orderId = orderId.id;
    }
    if(typeof data === 'number') {
        return this.crm.find('orders/' + orderId + '/line_items/' + data);
    }
    return this.crm.find('orders/' + orderId + '/line_items', data);
};

LineItems.prototype.create = function(orderId, data) {
    if(typeof orderId !== 'number') {
        orderId = orderId.id;
    }
    return this.crm.create('orders/' + orderId + '/line_items', data);
};

LineItems.prototype.remove = function(orderId, id) {
    if(typeof orderId !== 'number') {
        orderId = orderId.id;
    }
    return this.crm.delete('orders/' + orderId + '/line_items/' + id);
};

module.exports = LineItems;