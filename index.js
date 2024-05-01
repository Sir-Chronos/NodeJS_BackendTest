//Loads all variables from the .env file and add's it to the process
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000 // loads the port from the .env file or use a default one

app.get('/', (req, res) => {
    res.send("Hello Nodemon!")
})
app.listen(port, () => {
    console.log("Server is running on port 3000");
});

mongoose.connect(process.env.MONGODB_URI)
.then(() =>{
    console.log("Connection to database succesfull");
})
.catch((e) => {
    console.log(`Connection to database failed: ${e}`);
})


//baPziv1MAS3Vb2i4
//siriuswebdeveloper