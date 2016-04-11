//  https://developers.getbase.com/docs/rest/reference/users

function Users(crm) {
    this.crm = crm;
}

Users.prototype.find = function(params) {
    return this.crm.find('users', params);
};

Users.prototype.self = function() {
    return this.crm.find('users/self');
};

module.exports = Users;