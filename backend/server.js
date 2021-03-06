import express from 'express';
import cors from 'cors';
import path from 'path';

import data from './data';


const app = express();
app.use(cors());
app.get('/api/products', (req, res) => {
    res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
    const product = (data.products.find((x) =>
        x._id === req.params.id));
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({
            message: 'Product Not Found!'
        });
    }
});

app.use(express.static(path.join(__dirname, '/../frontend')));
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/../frontend/index.html`);
})

app.listen(process.env.PORT || 5000, () => {
    console.log('serve at http://localhost:5000');
});