# Products

Any methods return promise object.

## Static methods

### Retrieve all products

```javascript
client.products.find([params][, callback(err, products)]);
```

- `params` is object with a list of filters, not required
- `callback` is a function, not required

### Create a product

```javascript
client.products.create(data[, callback(err, product)]);
```

- `data` is a product object
- `callback` is a function, not required

### Retrieve a single product

```javascript
client.products.find(id[, callback(err, product)]);
```

- `id` is unique identifier (number) of the product
- `callback` is a function, not required

### Update a product

```javascript
client.products.update(id, data[, callback(err, product)]);
```

- `id` is a product ID (number)
- `data` is a updated params of the product (object)
- `callback` is a function, not required

### Delete a product

```javascript
client.products.delete(id[, callback(err, state)]);
```

- `id` is unique identifier (number) of the product
- `callback` is a function, not required

## Model methods

### Create a product

```javascript
var Product = client.products;

new Product(data).save([callback(err, product)]);
```

- `data` is a product object
- `callback` is a function, not required

### Update a product

```javascript
product.save([callback(err, product)]);
```

- `callback` is a function, not required

### Delete a product

```javascript
product.delete([callback(err, state)]);
```

- `callback` is a function, not required

---

Detailed documentation in the [official API](https://developers.getbase.com/docs/rest/reference/products "API Documentation")

## License
MIT

## Bug Reports
Report [here](https://github.com/yurypaleev/BaseCRM/issues?q=products).