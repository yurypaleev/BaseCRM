var extend = require('extend');

var Request = require('./request');
var model = require('./model');

//  Resources
var account = require('./account');
var associatedContacts = require('./associated_contacts');
var contacts = require('./contacts');
var dealSources = require('./deal_sources');
var deals = require('./deals');
var leadSources = require('./lead_sources');
var leads = require('./leads');
var lineItems = require('./line_items');
var lossReasons = require('./loss_reasons');
var notes = require('./notes');
var orders = require('./orders');
var pipelines = require('./pipelines');
var products = require('./products');
var stages = require('./stages');
var tags = require('./tags');
var tasks = require('./tasks');
var users = require('./users');

function Client(options) {
    this.request = new Request(extend({
        accessToken: '',
        baseUrl: 'https://api.getbase.com',
        userAgent: 'BaseCRM/v2 NodeJS/' + process.version,
        timeout: 30
    }, options));
    
    this.account = account;
    this.associatedContacts = associatedContacts(this, model);
    this.contacts = contacts(this, model);
    this.dealSources = dealSources(this, model);
    this.deals = deals(this, model);
    this.leadSources = leadSources(this, model);
    this.leads = leads(this, model);
    this.lineItems = lineItems(this, model);
    this.lossReasons = lossReasons(this, model);
    this.notes = notes(this, model);
    this.orders = orders(this, model);
    this.pipelines = pipelines;
    this.products = products(this, model);
    this.stages = stages;
    this.tags = tags(this, model);
    this.tasks = tasks(this, model);
    this.users = users(this, model);
}

module.exports = Client;