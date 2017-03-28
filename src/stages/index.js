//  https://developers.getbase.com/docs/rest/reference/stages

module.exports = function(params, callback) {
    return this.request.get('stages', params, callback);
};
