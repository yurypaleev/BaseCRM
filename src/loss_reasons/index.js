//  https://developers.getbase.com/docs/rest/reference/loss_reasons

var extend = require('extend');
var proto = require('../methods');

module.exports = function(client) {
    function Reason(data) {
        extend(this, data);
    }

    extend(Reason, {
        find: function(params, callback) {
            return client.request.get('loss_reasons', params, callback, this);
        },
        create: function(data, callback) {
            return client.request.post('loss_reasons', data, null, callback, this);
        },
        update: function(id, data, callback) {
            return client.request.put('loss_reasons/' + id, data, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('loss_reasons/' + id, callback);
        }
    });

    extend(Reason.prototype, proto);

    return Reason;
};