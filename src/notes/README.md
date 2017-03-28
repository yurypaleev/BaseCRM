# Notes

Any methods return promise object.

## Static methods

### Retrieve all notes

```javascript
client.notes.find([params][, callback(err, notes)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a note

```javascript
client.notes.create(data[, callback(err, note)]);
```

- `data` is a note object
- `callback` is a function, not required

### Retrieve a single note

```javascript
client.notes.find(id[, callback(err, note)]);
```

- `id` is unique identifier (number) of the note
- `callback` is a function, not required

### Update a note

```javascript
client.notes.update(id, data[, callback(err, note)]);
```

- `id` is a note ID (number)
- `data` is a updated params of the note (object)
- `callback` is a function, not required

### Delete a note

```javascript
client.notes.delete(id[, callback(err, state)]);
```

- `id` is unique identifier (number) of the note
- `callback` is a function, not required

## Model methods

### Create a note

```javascript
var Note = client.notes;

new Note(data).save([callback(err, note)]);
```

- `data` is a note object
- `callback` is a function, not required

### Update a note

```javascript
note.save([callback(err, note)]);
```

- `callback` is a function, not required

### Delete a note

```javascript
note.delete([callback(err, state)]);
```

- `callback` is a function, not required

--
Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/notes "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=notes).