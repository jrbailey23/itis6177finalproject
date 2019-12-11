//REST end point for Azure Cognative Services
//Code by John Bailey
//Version 1.0
//Last Update 12/10/19

const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();

const port = 3008;

app.use(bodyParser.urlencoded({ extended: true }))


    app.listen(port, () => {
        console.log("App is running on " + port);
    });


