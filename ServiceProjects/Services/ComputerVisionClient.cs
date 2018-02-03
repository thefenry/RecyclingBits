using Microsoft.Cognitive.CustomVision.Prediction;
using ServiceProjects.Interfaces;

namespace ServiceProjects.Services
{
    class ComputerVisionClient: IComputerVisionClient
    {
        public ComputerVisionClient()
        {
            // Create a prediction endpoint, passing in the obtained prediction key
            //PredictionEndpoint endpoint = new PredictionEndpoint() { ApiKey = predictionKey };
            //var testImage = new object();
            //// Make a prediction against the new project
            ////Console.WriteLine("Making a prediction:");
            ////var result = endpoint.PredictImage(project.Id, testImage);
            //endpoint.PredictImageUrlWithHttpMessagesAsync()
            //ServiceKey
        }

    }
}
