# Associated Contacts

Any methods return promise object.

## Static methods

### Retrieve deal's associated contacts

```javascript
client.associatedContacts.find(dealId[, params][, callback(err, contacts)]);
```

- `dealId` is unique identifier (number) of the deal
- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create an associated contact

```javascript
client.associatedContacts.create(dealId, data[, callback(err, contact)]);
```

- `dealId` is unique identifier (number) of the deal
- `data` is a contact object
- `callback` is a function, not required

### Remove an associated contact

```javascript
client.associatedContacts.remove(dealId, id[, callback(err, state)]);
```

- `dealId` is unique identifier (number) of the deal
- `id` is unique identifier (number) of the contact
- `callback` is a function, not required

## Model methods

### Remove an associated contact

```javascript
contact.remove(dealId, [callback(err, state)]);
```

- `dealId` is unique identifier (number) of the deal
- `callback` is a function, not required

---

Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/associated_contacts "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=associated%20contacts).