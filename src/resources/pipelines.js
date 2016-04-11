//  https://developers.getbase.com/docs/rest/reference/pipelines

module.exports = function(params) {
    return this.find('pipelines', params);
};
