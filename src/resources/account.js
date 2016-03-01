//  https://developers.getbase.com/docs/rest/reference/account

module.exports = function() {
    return this.find('accounts/self');
};