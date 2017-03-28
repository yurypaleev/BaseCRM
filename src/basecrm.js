var BaseCRM = require('./client');

BaseCRM.Client = BaseCRM;
BaseCRM.Sync = require('./sync');

BaseCRM.version = 'v' + require('../package').version;

module.exports = BaseCRM;