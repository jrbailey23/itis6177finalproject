//REST end point to use Azure Cognative Services
//Code by John Bailey
//Version 1.0
//Last Update 12/10/19


module.exports = function(app) {



    //Receive new sentiment through POST request coming to server in Digital Ocean
    //Centos server with pubilc IP of 206.189.191.83 listening on port 3008
    app.post('/sentiments', (req, response) => {

        //Write to console that new sentiment has been received
        console.log(req.body)
        response.send('New sentiment has been received')

        //Take parameters from the body of the POST request and put them into sentimentInput that can be passed on to Azure Cognative services
        const sentimentInput = {text: req.body.language, text: req.body.id, text: req.body.text };

        let https = require ('https');

        //Subscription key for cognitive services created for final project
        const subscription_key = "523461e265bd471c9cb033eb69bad5e3";
        
        //End point url for cognitive services created for final project
        const endpoint = "https://eastus.api.cognitive.microsoft.com/";
        
        let path = '/text/analytics/v2.1/sentiment';
        
        //Get response from Azure Cognative Services and display body in console
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

        //Other routes for GET, UPDATE, and DELETE will be created here in later versions
        
        //Create POST request to send sentiments to Azure Cognative Services
        let get_sentiments = function (sentimentInput) {
            let body = JSON.stringify(sentimentInput);
        
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