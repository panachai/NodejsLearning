const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

//mock data
const products = [
    { id: 1, name: 'pencil' },
    { id: 2, name: 'pen' },
    { id: 3, name: 'book' },
    { id: 4, name: 'mouse' },
    { id: 5, name: 'keyboard' },
    { id: 6, name: 'smartwatch' },
];

app.get('/', (req, res) => {
    res.send('Hello World to Learning Node.js');
});

//Get ALL
app.get('/api/product', (req, res) => {
    res.send(products);
});

//Get by ID
app.get('/api/product/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if (!product) { res.status(404).send('The product with the given ID was not found.') }
    res.send(product);
});

//Post Add
app.post('/api/product', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);

    if (result.error) {
        //400 Bad Request
        res.status(400).send(result.error.details[0].message)
        return;
    }

    const product = {
        id: products.length + 1,
        name: req.body.name
    };
    products.push(product);
    res.send(product);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listenning on port ${port}...`));