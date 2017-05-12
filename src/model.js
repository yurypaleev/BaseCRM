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
	},

	assignNote: function(note, callback) {
		if(!(note instanceof this.constructor.client.notes)) {
			note = new this.constructor.client.notes({
				content: note
			});
		}

		note.resource_type = this.constructor.type;
		note.resource_id = this.id;

		return note.save(callback);
	},
	assignTask: function(task, callback) {
		if(!(task instanceof this.constructor.client.tasks)) {
			return Promise.reject(new Error('Use task model'));
		}

		task.resource_type = this.constructor.type;
		task.resource_id = this.id;

		return task.save(callback);
	}
};

module.exports = model;