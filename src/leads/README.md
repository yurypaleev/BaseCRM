# Leads

Any methods return promise object.

## Static methods

### Retrieve all leads

```javascript
client.leads.find([params][, callback(err, leads)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a lead

```javascript
client.leads.create(data[, callback(err, lead)]);
```

- `data` is a lead object
- `callback` is a function, not required

### Retrieve a single lead

```javascript
client.leads.find(id[, callback(err, lead)]);
```

- `id` is unique identifier (number) of the lead
- `callback` is a function, not required

### Update a lead

```javascript
client.leads.update(id, data[, callback(err, lead)]);
```

- `id` is a lead ID (number)
- `data` is a updated params of the lead (object)
- `callback` is a function, not required

### Delete a lead

```javascript
client.leads.delete(id[, callback(err, state)]);
```

- `id` is unique identifier (number) of the lead
- `callback` is a function, not required

### Upsert a lead

```javascript
client.leads.upsert(params, data[, callback(err, lead)]);
```

- `params` is object with a list of filters
- `data` is a lead object
- `callback` is a function, not required

## Model methods

### Create a lead

```javascript
var Lead = client.leads;

new Lead(data).save([callback(err, lead)]);
```

- `data` is a lead object
- `callback` is a function, not required

### Update a lead

```javascript
lead.save([callback(err, lead)]);
```

- `callback` is a function, not required

### Delete a lead

```javascript
lead.delete([callback(err, state)]);
```

- `callback` is a function, not required

### Assign a note

```javascript
lead.assignNote(data[, callback(err, note)]);
```

- `data` is model of the [note](https://github.com/yurypaleev/BaseCRM/blob/master/src/notes/README.md "API Documentation") or string
- `callback` is a function, not required

### Assign a task

```javascript
lead.assignTask(task[, callback(err, task)]);
```

- `task` is model of the [task](https://github.com/yurypaleev/BaseCRM/blob/master/src/tasks/README.md "API Documentation")
- `callback` is a function, not required

---

Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/leads "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=leads).
