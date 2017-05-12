# Deals

Any methods return promise object.

## Static methods

### Retrieve all deals

```javascript
client.deals.find([params][, callback(err, deals)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a deal

```javascript
client.deals.create(data[, callback(err, deal)]);
```

- `data` is a deal object
- `callback` is a function, not required

### Retrieve a single deal

```javascript
client.deals.find(id[, callback(err, deal)]);
```

- `id` is unique identifier (number) of the deal
- `callback` is a function, not required

### Update a deal

```javascript
client.deals.update(id, data[, callback(err, deal)]);
```

- `id` is a deal ID (number)
- `data` is a updated params of the deal (object)
- `callback` is a function, not required

### Delete a deal

```javascript
client.deals.delete(id[, callback(err, state)]);
```

- `id` is unique identifier (number) of the deal
- `callback` is a function, not required

### Upsert a deal

```javascript
client.deals.upsert(params, data[, callback(err, deal)]);
```

- `params` is object with a list of filters
- `data` is a deal object
- `callback` is a function, not required

## Model methods

### Create a deal

```javascript
var Deal = client.deals;

new Deal(data).save([callback(err, deal)]);
```

- `data` is a deal object
- `callback` is a function, not required

### Update a deal

```javascript
deal.save([callback(err, deal)]);
```

- `callback` is a function, not required

### Delete a deal

```javascript
deal.delete([callback(err, state)]);
```

- `callback` is a function, not required

### Retrieve deal's associated contacts

```javascript
deal.findContacts([params][, callback(err, contacts)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create an associated contact

```javascript
deal.createContact(data[, callback(err, contact)]);
```

- `data` is a contact object
- `callback` is a function, not required

### Remove an associated contact

```javascript
deal.removeContact(contactId[, callback(err, state)]);
//  or
deal.removeContact(contact[, callback(err, state)]);
```

- `contactId` is unique identifier (number) of the contact
- `contact` is model of the [contact](https://github.com/yurypaleev/BaseCRM/blob/master/src/associated_contacts/README.md "API Documentation")
- `callback` is a function, not required

### Assign a note

```javascript
deal.assignNote(data[, callback(err, note)]);
```

- `data` is model of the [note](https://github.com/yurypaleev/BaseCRM/blob/master/src/notes/README.md "API Documentation") or string
- `callback` is a function, not required

### Assign a task

```javascript
deal.assignTask(task[, callback(err, task)]);
```

- `task` is model of the [task](https://github.com/yurypaleev/BaseCRM/blob/master/src/tasks/README.md "API Documentation")
- `callback` is a function, not required

---

Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/deals "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=deals).