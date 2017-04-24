function model(proto, data, readonly) {
	var item = {};
	var param;
	var value;

	item.__proto__ = proto;

	for(param in data) {
		if(data.hasOwnProperty(param)) {
			value = data[param];

			if(~readonly.indexOf(param)) {
				proto[param] = value;
			} else {
				item[param] = value;
			}
		}
	}

    return item;
}

model.methods = {
	save: function(callback) {
	    return this.id ?
		    this.constructor.update(this.id, this, callback) :
		    this.constructor.create(this, callback);
	},
    delete: function(callback) {
	    return this.constructor.delete(this.id, callback);
	}
};

module.exports = model;