module.exports = {
    save: function(callback) {
        return this.id ?
            this.constructor.update(this.id, this, callback) :
            this.constructor.create(this, callback);
    },
    delete: function(callback) {
        return this.constructor.delete(this.id, callback);
    }
};