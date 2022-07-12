const express = require('express');
const productRoutes = require('./routes/product');
const cors = require('cors');
// connect to the database
const db = require('./config/db');
db();

const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/products', productRoutes);

app.listen(port, () => console.log(`Dev URL: http://127.0.0.1:${port}/`));
