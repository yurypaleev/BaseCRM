//  https://developers.getbase.com/docs/rest/reference/users

function Users(crm) {
    this.crm = crm;
}

Users.prototype.find = function(data) {
    if(typeof data === 'number') {
        return this.crm.find('users/' + data);
    }
    return this.crm.find('users', data);
};

Users.prototype.self = function() {
    return this.crm.find('users/self');
};

module.exports = Users;