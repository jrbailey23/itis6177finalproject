//REST end point to use Azure Cognative Services
//Code by John Bailey
//Version 1.0
//Last Update 12/10/19


module.exports = function(app) {



    //Receive a new sentiment through POST request coming to server
    app.post('/sentiments', (req, res) => {
        // Create new sentiment
        console.log(req.body)
        res.send('New sentiment has been received')

        const sentimentInput = {text: req.body.language, text: req.body.id, text: req.body.text };

        let https = require ('https');

        //subscription key for cognitive services created for final project
        const subscription_key = "523461e265bd471c9cb033eb69bad5e3";
        
        //end point url for cognitive services created for final project
        const endpoint = "https://eastus.api.cognitive.microsoft.com/";
        
        let path = '/text/analytics/v2.1/sentiment';
        
        let response_handler = function (response) {
            let body = '';
            response.on('data', function (d) {
                body += d;
            });
            response.on('end', function () {
                let body_ = JSON.parse(body);
                let body__ = JSON.stringify(body_, null, '  ');
                console.log(body__);
            });
            response.on('error', function (e) {
                console.log('Error: ' + e.message);
            });
        };
        
        let get_sentiments = function (documents) {
            let body = JSON.stringify(documents);
        
            let request_params = {
                method: 'POST',
                hostname: (new URL(endpoint)).hostname,
                path: path,
                headers: {
                    'Ocp-Apim-Subscription-Key': subscription_key,
                }
            };
        
            let req = https.request(request_params, response_handler);
            req.write(body);
            req.end();
        }
    });
};
sentimentAnalysis(textAnalyticsClient)