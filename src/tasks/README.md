# Tasks

Any methods return promise object.

## Static methods

### Retrieve all tasks

```javascript
client.tasks.find([params][, callback(err, tasks)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a task

```javascript
client.tasks.create(data[, callback(err, task)]);
```

- `data` is a task object
- `callback` is a function, not required

### Retrieve a single task

```javascript
client.tasks.find(id[, callback(err, task)]);
```

- `id` is unique identifier (number) of the task
- `callback` is a function, not required

### Update a task

```javascript
client.tasks.update(id, data[, callback(err, task)]);
```

- `id` is a task ID (number)
- `data` is a updated params of the task (object)
- `callback` is a function, not required

### Delete a task

```javascript
client.tasks.delete(id[, callback(err, state)]);
```

- `id` is unique identifier (number) of the task
- `callback` is a function, not required

## Model methods

### Create a task

```javascript
var Task = client.tasks;

new Task(data).save([callback(err, task)]);
```

- `data` is a task object
- `callback` is a function, not required

### Update a task

```javascript
task.save([callback(err, task)]);
```

- `callback` is a function, not required

### Delete a task

```javascript
task.delete([callback(err, state)]);
```

- `callback` is a function, not required

### Assign a task

```javascript
task.assignTo(item[, callback(err, note)]);
```

- `item` is any model of the resources: [lead](https://github.com/yurypaleev/BaseCRM/blob/master/src/leads/README.md "API Documentation"), [contact](https://github.com/yurypaleev/BaseCRM/blob/master/src/contacts/README.md "API Documentation") or [deal](https://github.com/yurypaleev/BaseCRM/blob/master/src/deals/README.md "API Documentation")
- `callback` is a function, not required

---

Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/tasks "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=tasks).