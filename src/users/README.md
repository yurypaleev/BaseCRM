# Users

Any methods return promise object.

## Static methods

### Retrieve all users

```javascript
client.users.find([params][, callback(err, users)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Retrieve a single user

```javascript
client.users.find(id[, callback(err, user)]);
```

- `id` is unique identifier (number) of the user
- `callback` is a function, not required

### Retrieve an authenticating user

```javascript
client.users.self([callback(err, user)]);
```

- `callback` is a function, not required

--
Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/users "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=users).