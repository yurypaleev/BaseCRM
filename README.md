# BaseCRM

BaseCRM Official API V2 library client for NodeJS

## Installation

    $ npm install basecrm

## Usage

```javascript
var BaseCRM = require('basecrm');
```

### Build
__Using this api without authentication gives an error__

```javascript
var crm = new BaseCRM({
  accessToken: '<YOUR_PERSONAL_ACCESS_TOKEN>'
});
```

### Options

The following options are available while instantiating a client:

 * __accessToken__: Personal access token
 * __baseUrl__: Base url for the api
 * __userAgent__: Default user-agent for all requests
 * __timeout__: Request timeout

### Resources and actions

All requests use Promise with REST.
 
##### [Account](https://developers.getbase.com/docs/rest/reference/account "API Documentation")

```javascript
//  RETRIEVE ACCOUNT DETAILS
crm.account()
  .then(function(data) {})
```

##### [Associated Contacts](https://developers.getbase.com/docs/rest/reference/associated_contacts "API Documentation")

```javascript
//  RETRIEVE DEAL'S ASSOCIATED CONTACTS
crm.associatedContacts.find(dealId[, params])
  .then(function(items) {})
  
//  CREATE AN ASSOCIATED CONTACT
crm.associatedContacts.create(dealId, data)
  .then(function(data) {})
  
//  REMOVE AN ASSOCIATED CONTACT
crm.associatedContacts.remove(dealId, contactId)
  .then(function() {})
```

##### [Line Items](https://developers.getbase.com/docs/rest/reference/line_items "API Documentation")

```javascript
//  RETRIEVE ORDER'S LINE ITEMS
crm.lineItems.find(orderId[, params])
  .then(function(items) {})
  
//  RETRIEVE A SINGLE LINE ITEM
crm.lineItems.find(orderId, lineItemId)
  .then(function(items) {})
  
//  CREATE A LINE ITEM
crm.lineItems.create(orderId, data)
  .then(function(data) {})
  
//  REMOVE A LINE ITEM
crm.lineItems.remove(orderId, lineItemId)
  .then(function() {})
```
 
##### [Pipelines](https://developers.getbase.com/docs/rest/reference/pipelines "API Documentation") and [Stages](https://developers.getbase.com/docs/rest/reference/stages "API Documentation")

```javascript
//  RETRIEVE ALL PIPELINES
crm.pipelines([params])
  .then(function(items) {})
  
//  RETRIEVE ALL STAGES
crm.stages([params])
  .then(function(items) {})
```

##### [Contacts](https://developers.getbase.com/docs/rest/reference/contacts "API Documentation"), [Deal Sources](https://developers.getbase.com/docs/rest/reference/deal_sources "API Documentation"), [Deals](https://developers.getbase.com/docs/rest/reference/deals "API Documentation"), [Lead Sources](https://developers.getbase.com/docs/rest/reference/lead_sources "API Documentation"), [Leads](https://developers.getbase.com/docs/rest/reference/leads "API Documentation"), [Loss Reasons](https://developers.getbase.com/docs/rest/reference/loss_reasons "API Documentation"), [Notes](https://developers.getbase.com/docs/rest/reference/notes "API Documentation"), [Orders](https://developers.getbase.com/docs/rest/reference/orders "API Documentation"), [Products](https://developers.getbase.com/docs/rest/reference/products "API Documentation"), [Tags](https://developers.getbase.com/docs/rest/reference/tags "API Documentation") and [Tasks](https://developers.getbase.com/docs/rest/reference/tasks "API Documentation")

```javascript
var resource = crm.contacts;  //  or crm.dealSources, crm.deals, crm.leadSources, crm.leads, crm.lossReasons, crm.notes, crm.orders, crm.products, crm.tags and crm.tasks

//  RETRIEVE ALL RESOURCES
resource.find([params])
  .then(function(items) {})
  
//  RETRIEVE A SINGLE RESOURCE
resource.find(id)
  .then(function(data) {})
  
//  CREATE A RESOURCE
resource.create(data)
  .then(function(data) {})
  
//  UPDATE A RESOURCE
resource.update(id[, data])
  .then(function(data) {})
  
//  DELETE A RESOURCE
resource.delete(id)
  .then(function() {})
```

##### [Users](https://developers.getbase.com/docs/rest/reference/users "API Documentation")

```javascript
//  RETRIEVE ALL USERS
crm.users.find([params])
  .then(function(items) {})

//  RETRIEVE A SINGLE USER
crm.users.find(id)
  .then(function(data) {})
  
//  RETRIEVE AN AUTHENTICATING USER
crm.users.self()
  .then(function(data) {})
```

## License
MIT

## Bug Reports
Report [here](https://github.com/basecrm/basecrm-php/issues).
