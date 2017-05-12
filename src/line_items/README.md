# Line Items

Any methods return promise object.

## Static methods

### Retrieve order's line items

```javascript
client.lineItems.find(orderId[, params][, callback(err, items)]);
```

- `orderId` is unique identifier (number) of the order
- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a line item

```javascript
client.lineItems.create(orderId, data[, callback(err, item)]);
```

- `orderId` is unique identifier (number) of the order
- `data` is a line item object
- `data.product` is a model of the [product](https://github.com/yurypaleev/BaseCRM/blob/master/src/products/README.md "API Documentation")
- `callback` is a function, not required

### Retrieve a single line item

```javascript
client.lineItems.find(orderId, id[, callback(err, item)]);
```

- `orderId` is unique identifier (number) of the order
- `id` is unique identifier (number) of the line item
- `callback` is a function, not required

### Remove a line item

```javascript
client.lineItems.remove(orderId, id[, callback(err, state)]);
```

- `orderId` is unique identifier (number) of the order
- `id` is unique identifier (number) of the line item
- `callback` is a function, not required

## Model methods

### Remove a line item

```javascript
item.remove(orderId, [callback(err, state)]);
```

- `orderId` is unique identifier (number) of the order
- `callback` is a function, not required

---

Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/line_items "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=line%20items).