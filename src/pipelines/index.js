//  https://developers.getbase.com/docs/rest/reference/pipelines

module.exports = function(params, callback) {
    return this.request.get('pipelines', params, callback);
};
