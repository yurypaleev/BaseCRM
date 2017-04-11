function Service(request) {
    this.request = request;
}

Service.prototype = {
    start: function(deviceUUID, callback) {
        return this.request
            .headers({
                'X-Basecrm-Device-UUID': deviceUUID
            })
            .post('sync/start', null, null, function(err, data) {
                if(data) {
                    data.queues = data.queues.map(function(item) {
                        return item.data;
                    });
                }
                if(callback instanceof Function) {
                    return callback(err, data);
                }
            });
    },
    fetch: function(deviceUUID, sessionId, callback) {
        return this.request.send({
            method: 'GET',
            resource: 'sync/' + sessionId + '/queues/main',
            headers: {
                'X-Basecrm-Device-UUID': deviceUUID
            },
            transform: function() {}
        }, callback);
    },
    ack: function(deviceUUID, ackKeys, callback) {
        return this.request
            .headers({
                'X-Basecrm-Device-UUID': deviceUUID
            })
            .post('sync/ack', {
                ack_keys: ackKeys
            }, null,  callback);
    }
};


function Sync(client, deviceUUID) {
    this.service = new Service(client.request);
    this.deviceUUID = deviceUUID;
}

Sync.prototype.fetch = function(handler) {
    if(!(handler instanceof Function)) {
        return;
    }
    
    var self = this;

    if(!self.sessionId) {
        self.service.start(this.deviceUUID, function(err, data) {
            if(data) {
                self.sessionId = data.id;
                self.fetch(handler);
            }
        });
        return;
    }

    self.service.fetch(self.deviceUUID, self.sessionId, function(err, body) {
        if(err || !(body.items instanceof Array)) {
            return;
        }

        var ackKeys = body.items
            .filter(function(item) {
                return handler.call(item, item.meta.type, item.meta.sync.event_type, item.data);
            })
            .map(function(item) {
                return item.meta.sync.ack_key;
            });

        if(!ackKeys.length) {
            return;
        }

        self.service.ack(self.deviceUUID, ackKeys, function(err, isBroken) {
            !err && isBroken === false || self.fetch(handler);
        });
    });
};

Sync.Service = Service;

Sync.ACK = true;
Sync.NACK = false;

module.exports = Sync;
