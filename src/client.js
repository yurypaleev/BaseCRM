var extend = require('extend');

var Request = require('./request');

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
    this.associatedContacts = associatedContacts(this);
    this.contacts = contacts(this);
    this.dealSources = dealSources(this);
    this.deals = deals(this);
    this.leadSources = leadSources(this);
    this.leads = leads(this);
    this.lineItems = lineItems(this);
    this.lossReasons = lossReasons(this);
    this.notes = notes(this);
    this.orders = orders(this);
    this.pipelines = pipelines;
    this.products = products(this);
    this.stages = stages;
    this.tags = tags(this);
    this.tasks = tasks(this);
    this.users = users(this);
}

module.exports = Client;