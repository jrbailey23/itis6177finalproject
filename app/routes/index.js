//REST end point for Azure Cognative Services
//Code by John Bailey
//Version 1.0
//Last Update 12/10/19

const  sentimentRoutes = require('./sentiment_routes');

module.exports = function(app) {
    sentimentRoutes(app);
}