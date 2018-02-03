using Microsoft.Cognitive.CustomVision.Prediction;
using Microsoft.Cognitive.CustomVision.Prediction.Models;
using ServiceProjects.Interfaces;
using System;
using System.IO;

namespace ServiceProjects.Services
{
    public class ComputerVisionClient : IComputerVisionClient
    {
        private static string predictionKey { get; } = "d8fab3898adc430c80ad1669c875c4ff";
        private static Guid projectId { get; } = new Guid("734d1bd7-7901-4a7f-b4d9-6f4a99ee3f37");
        private PredictionEndpoint endpoint;
        public ComputerVisionClient()
        {
            endpoint = new PredictionEndpoint()
            {
                ApiKey = predictionKey,

            };
        }
        public ImagePredictionResultModel GetResult(Stream imageStr)
        {
            var result = endpoint.PredictImage(projectId, imageStr);
            return result;
        }
    }
}
