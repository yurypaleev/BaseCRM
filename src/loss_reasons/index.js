//  https://developers.getbase.com/docs/rest/reference/loss_reasons

var extend = require('extend');
var readonly = ['id', 'creator_id', 'created_at', 'updated_at'];

module.exports = function(client, model) {
    function Reason(data) {
		return model(this, data, readonly);
    }

    extend(Reason, {
		client: client,
        type: 'loss_reason',

        find: function(params, callback) {
            return client.request.get('loss_reasons', params, callback, this);
        },
        create: function(name, callback) {
            return client.request.post('loss_reasons', {
                name: name
            }, null, callback, this);
        },
        update: function(id, name, callback) {
            return client.request.put('loss_reasons/' + id, {
				name: name
			}, callback, this);
        },
        delete: function(id, callback) {
            return client.request.delete('loss_reasons/' + id, callback);
        }
    });

    extend(Reason.prototype, model.methods);

    return Reason;
};