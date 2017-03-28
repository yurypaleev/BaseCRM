# Orders

Any methods return promise object.

## Static methods

### Retrieve all orders

```javascript
client.orders.find([params][, callback(err, orders)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create an order

```javascript
client.orders.create(data[, callback(err, order)]);
```

- `data` is an order object
- `callback` is a function, not required

### Retrieve a single order

```javascript
client.orders.find(id[, callback(err, order)]);
```

- `id` is unique identifier (number) of the order
- `callback` is a function, not required

### Update an order

```javascript
client.orders.update(id, data[, callback(err, order)]);
```

- `id` is an order ID (number)
- `data` is a updated params of the order (object)
- `callback` is a function, not required

### Delete an order

```javascript
client.orders.delete(id[, callback(err, state)]);
```

- `id` is unique identifier (number) of the order
- `callback` is a function, not required

## Model methods

### Create an order

```javascript
var Order = client.orders;

new Order(data).save([callback(err, order)]);
```

- `data` is an order object
- `callback` is a function, not required

### Update an order

```javascript
order.save([callback(err, order)]);
```

- `callback` is a function, not required

### Delete an order

```javascript
order.delete([callback(err, state)]);
```

- `callback` is a function, not required

### Retrieve order's line items

```javascript
order.findItems([params][, callback(err, items)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a line item

```javascript
order.createItem(data[, callback(err, item)]);
```

- `data` is a line item object
- `callback` is a function, not required

### Retrieve a single line item

```javascript
order.findItems(lineItemId[, callback(err, item)]);
```

- `lineItemId` is unique identifier (number) of the line item
- `callback` is a function, not required

### Remove a line item

```javascript
order.removeItem(lineItemId[, callback(err, state)]);
```

- `lineItemId` is unique identifier (number) of the line item
- `callback` is a function, not required

--
Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/orders "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=orders).