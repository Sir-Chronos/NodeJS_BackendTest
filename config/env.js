//Loads all variables from the .env file and add's it to node/process
require('dotenv').config();

//export loadEnvVariables() witch returns .env variables
module.exports = function loadEnvVariables() {
    const port = process.env.PORT || 3000;
    const mongodbUrl = process.env.MONGODB_URL;
    
    return { port, mongodbUrl };
};
