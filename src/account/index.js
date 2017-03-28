//  https://developers.getbase.com/docs/rest/reference/account

module.exports = function(callback) {
    return this.request.get('accounts/self', callback);
};