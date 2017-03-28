# Loss Reasons

Any methods return promise object.

## Static methods

### Retrieve all reasons

```javascript
client.lossReasons.find([params][, callback(err, reasons)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a loss reason

```javascript
client.lossReasons.create(data[, callback(err, reason)]);
```

- `data` is a reason object
- `callback` is a function, not required

### Retrieve a single reason

```javascript
client.lossReasons.find(id[, callback(err, reason)]);
```

- `id` is unique identifier (number) of the loss reason
- `callback` is a function, not required

### Update a loss reason

```javascript
client.lossReasons.update(id, data[, callback(err, reason)]);
```

- `id` is a reason ID (number)
- `data` is a updated params of the reason (object)
- `callback` is a function, not required

### Delete a reason

```javascript
client.lossReasons.delete(id[, callback(err, state)]);
```

- `id` is unique identifier (number) of the loss reason
- `callback` is a function, not required

## Model methods

### Create a loss reason

```javascript
var Reason = client.lossReasons;

new Reason(data).save([callback(err, reason)]);
```

- `data` is a reason object
- `callback` is a function, not required

### Update a loss reason

```javascript
reason.save([callback(err, reason)]);
```

- `callback` is a function, not required

### Delete a reason

```javascript
reason.delete([callback(err, state)]);
```

- `callback` is a function, not required

--
Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/loss_reasons "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=loss%20reasons).