﻿using Microsoft.Cognitive.CustomVision.Prediction;
using Microsoft.Cognitive.CustomVision.Prediction.Models;
using ServiceProjects.Interfaces;
using System;
using System.IO;

namespace ServiceProjects.Services
{
    public class ComputerVisionClient : IComputerVisionClient
    {
        private static string predictionKey { get; } = "d8fab3898adc430c80ad1669c875c4ff";
        private static Guid projectId { get; } = new Guid("f263980e-3b19-49b8-8444-d97a0b67ed2b");
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
