# Contacts

Any methods return promise object.

## Static methods

### Retrieve all contacts

```javascript
client.contacts.find([params][, callback(err, contacts)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a contact

```javascript
client.contacts.create(data[, callback(err, contact)]);
```

- `data` is a contact object
- `callback` is a function, not required

### Retrieve a single contact

```javascript
client.contacts.find(id[, callback(err, contact)]);
```

- `id` is unique identifier (number) of the contact
- `callback` is a function, not required

### Update a contact

```javascript
client.contacts.update(id, data[, callback(err, contact)]);
```

- `id` is a contact ID (number)
- `data` is a updated params of the contact (object)
- `callback` is a function, not required

### Delete a contact

```javascript
client.contacts.delete(id[, callback(err, state)]);
```

- `id` is unique identifier (number) of the contact
- `callback` is a function, not required

### Upsert a contact

```javascript
client.contacts.upsert(params, data[, callback(err, contact)]);
```

- `params` is object with a list of filters
- `data` is a contact object
- `callback` is a function, not required

## Model methods

### Create a contact

```javascript
var Contact = client.contacts;

new Contact(data).save([callback(err, contact)]);
```

- `data` is a contact object
- `callback` is a function, not required

### Update a contact

```javascript
contact.save([callback(err, contact)]);
```

- `callback` is a function, not required

### Delete a contact

```javascript
contact.delete([callback(err, state)]);
```

- `callback` is a function, not required

### Assign a note

```javascript
contact.assignNote(data[, callback(err, note)]);
```

- `data` is model of the [note](https://github.com/yurypaleev/BaseCRM/blob/master/src/notes/README.md "API Documentation") or string
- `callback` is a function, not required

### Assign a task

```javascript
contact.assignTask(task[, callback(err, task)]);
```

- `task` is model of the [task](https://github.com/yurypaleev/BaseCRM/blob/master/src/tasks/README.md "API Documentation")
- `callback` is a function, not required

---

Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/contacts "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=contacts).