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
//  BaseCRM equal to BaseCRM.Client
var client = new BaseCRM.Client({
  accessToken: '<YOUR_PERSONAL_ACCESS_TOKEN>'
});
```

### Options

The following options are available while instantiating a client:

 * __accessToken__: Personal access token
 * __baseUrl__: Base url for the api
 * __userAgent__: Default user-agent for all requests
 * __timeout__: Request timeout

### Resources documentations

Most of the resources now have a **Model API**, read the details in the documentations below.

- [Account](https://github.com/yurypaleev/BaseCRM/blob/master/src/account/README.md "API Documentation")
- [Associated Contacts](https://github.com/yurypaleev/BaseCRM/blob/master/src/associated_contacts/README.md "API Documentation")
- [Contacts](https://github.com/yurypaleev/BaseCRM/blob/master/src/contacts/README.md "API Documentation")
- [Deal Sources](https://github.com/yurypaleev/BaseCRM/blob/master/src/deal_sources/README.md "API Documentation")
- [Deals](https://github.com/yurypaleev/BaseCRM/blob/master/src/deals/README.md "API Documentation")
- [Lead Sources](https://github.com/yurypaleev/BaseCRM/blob/master/src/lead_sources/README.md "API Documentation")
- [Leads](https://github.com/yurypaleev/BaseCRM/blob/master/src/leads/README.md "API Documentation")
- [Line Items](https://github.com/yurypaleev/BaseCRM/blob/master/src/line_items/README.md "API Documentation")
- [Loss Reasons](https://github.com/yurypaleev/BaseCRM/blob/master/src/loss_reasons/README.md "API Documentation")
- [Notes](https://github.com/yurypaleev/BaseCRM/blob/master/src/notes/README.md "API Documentation")
- [Orders](https://github.com/yurypaleev/BaseCRM/blob/master/src/orders/README.md "API Documentation")
- [Pipelines](https://github.com/yurypaleev/BaseCRM/blob/master/src/pipelines/README.md "API Documentation")
- [Products](https://github.com/yurypaleev/BaseCRM/blob/master/src/products/README.md "API Documentation")
- [Stages](https://github.com/yurypaleev/BaseCRM/blob/master/src/stages/README.md "API Documentation")
- [Tags](https://github.com/yurypaleev/BaseCRM/blob/master/src/tags/README.md "API Documentation")
- [Tasks](https://github.com/yurypaleev/BaseCRM/blob/master/src/tasks/README.md "API Documentation")
- [Users](https://github.com/yurypaleev/BaseCRM/blob/master/src/users/README.md "API Documentation")

## Sync API

The following sample code shows how to perform a full synchronization flow using high-level wrapper.

First of all you need an instance of `BaseCRM.Client`. High-level `BaseCRM.Sync` wrapper uses `BaseCRM.Sync.Service` to interact with the Sync API.
In addition to the client instance, you must provide a device’s UUID within `deviceUUID` parameter. The device’s UUID must not change between synchronization sessions, otherwise the sync service will not recognize the device and will send all the data again.

```javascript
var client = new BaseCRM.Client({
  accessToken: '<YOUR_PERSONAL_ACCESS_TOKEN>'
});
var sync = new BaseCRM.Sync(client, '<YOUR_DEVICES_UUID>');
```

Now all you have to do is to call `fetch` method and pass a block that you might use to store fetched data to a database.

```javascript
var db = [];
sync.fetch(function(type, action, data) {
  return db.indexOf(type + '_' + JSON.stringify(data)) ? BaseCRM.Sync.ACK : BaseCRM.Sync.NACK;
});
```

Notice that you must return `BaseCRM.Sync.ACK` or `BaseCRM.Sync.NACK`.

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues).