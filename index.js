//Loads all variables from the .env file and add's it to the process
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000 ;// loads the port from the .env file or use a default one

const Product = require("./models/product.model.js");

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Nodemon!");
})

app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

mongoose.connect(process.env.MONGODB_URI)
.then(() =>{
    console.log("Connection to database succesfull");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch((e) => {
    console.log(`Connection to database failed: ${e}`);
})


//baPziv1MAS3Vb2i4
//siriuswebdeveloper