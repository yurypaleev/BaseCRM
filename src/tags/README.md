# Tags

Any methods return promise object.

## Static methods

### Retrieve all tags

```javascript
client.tags.find([params][, callback(err, tags)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a tag

```javascript
client.tags.create(data[, callback(err, tag)]);
```

- `data` is a tag object
- `callback` is a function, not required

### Retrieve a single tag

```javascript
client.tags.find(id[, callback(err, tag)]);
```

- `id` is unique identifier (number) of the tag
- `callback` is a function, not required

### Update a tag

```javascript
client.tags.update(id, data[, callback(err, tag)]);
```

- `id` is a tag ID (number)
- `data` is a updated params of the tag (object)
- `callback` is a function, not required

### Delete a tag

```javascript
client.tags.delete(id[, callback(err, state)]);
```

- `id` is unique identifier (number) of the tag
- `callback` is a function, not required

## Model methods

### Create a tag

```javascript
var Tag = client.tags;

new Tag(data).save([callback(err, tag)]);
```

- `data` is a tag object
- `callback` is a function, not required

### Update a tag

```javascript
tag.save([callback(err, tag)]);
```

- `callback` is a function, not required

### Delete a tag

```javascript
tag.delete([callback(err, state)]);
```

- `callback` is a function, not required

---

Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/tags "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=tags).