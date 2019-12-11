# itis6177finalproject
Final project for ITIS-6177 System Integration Class - John Bailey

Overview

This REST end point provides a platform where applications can post phrases or sentences and pass the phrase to Azure Cognitive Service for sentiment analysis. The Azure service ranks the sentence with a percentage of positive feedback. The Azure Cognitive Service returns an ID, language type, and percentage for positive ratings.

The POST request goes to a Centos server running Node.js hosted in Digital Ocean with an IP of 206.189.191.82 listening on port 3008

URL for POST: http://206.189.191.82:3008/sentiments

Testing can be done with Postman for POST request





Azure Cognative Services Parameters

Subscription key for cognitive services created for final project -
subscription_key = "523461e265bd471c9cb033eb69bad5e3";

End point url for cognitive services created for final project -
endpoint = "https://eastus.api.cognitive.microsoft.com/";



POST Request Examples

        { language: "en", 
            id: "1", 
            text: "The itis6177 class was very beneficial to me and my career!" 
        },
        
        { language: "en",
            id: "2",
            text: "Unfortunately I was not able to invest as much time as I would like in the projects for itis6177."
        },
        
        {
            language: "it",
            id: "3",
            text:
                "Charlotte ha alcuni ottimi ristoranti italiani!"
        },
        
        {
            language: "es",
            id: "4",
            text: "UNCC es un gran lugar para estudiantes internacionales."
        },


Results Returned from Azure Cognative Services for Examples

    {
      "id": "1",
      "score": 0.16900935769081116
    },
    
    {
      "id": "2",
      "score": 0.02298155426979065
    },
    
    {
      "id": "3",
      "score": 0.6184191107749939
    },
    
    {
      "id": "4",
      "score": 0.6275396347045898
    }

