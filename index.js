const express = require('express');
const mongoose = require('mongoose');

const loadEnvVariables = require('./config/env');
const productRoutes = require('./routes/product.route.js'); // Loads API Product routes

const app = express();
const { port, mongodbUrl } = loadEnvVariables();

app.use(express.json());
//app.use(express.urlencoded({extended: false})) // for FORMs use 
app.use('/api/products', productRoutes);

mongoose.connect(mongodbUrl)
    .then(() => {
        console.log("Connection to database successful");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((e) => {
        console.log(`Connection to database failed: ${e}`);
    });



//baPziv1MAS3Vb2i4
//siriuswebdeveloper