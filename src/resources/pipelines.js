//  https://developers.getbase.com/docs/rest/reference/pipelines

module.exports = function(data) {
    return this.crm.find('pipelines', data);
};