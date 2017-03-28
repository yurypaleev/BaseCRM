# Lead Sources

Any methods return promise object.

## Static methods

### Retrieve all sources

```javascript
client.leadSources.find([params][, callback(err, sources)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a source

```javascript
client.leadSources.create(data[, callback(err, source)]);
```

- `data` is a source object
- `callback` is a function, not required

### Retrieve a single source

```javascript
client.leadSources.find(id[, callback(err, source)]);
```

- `id` is unique identifier (number) of the source
- `callback` is a function, not required

### Update a source

```javascript
client.leadSources.update(id, data[, callback(err, source)]);
```

- `id` is a source ID (number)
- `data` is a updated params of the source (object)
- `callback` is a function, not required

### Delete a source

```javascript
client.leadSources.delete(id[, callback(err, state)]);
```

- `id` is unique identifier (number) of the source
- `callback` is a function, not required

## Model methods

### Create a source

```javascript
var Source = client.leadSources;

new Source(data).save([callback(err, source)]);
```

- `data` is a source object
- `callback` is a function, not required

### Update a source

```javascript
source.save([callback(err, source)]);
```

- `callback` is a function, not required

### Delete a source

```javascript
source.delete([callback(err, state)]);
```

- `callback` is a function, not required

--
Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/lead_sources "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=lead%20sources).