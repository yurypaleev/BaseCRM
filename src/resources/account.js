//  https://developers.getbase.com/docs/rest/reference/account

module.exports = function() {
    return this.find('accounts/self').then(function(res) {
        return Promise.resolve(res.data);
    });
};