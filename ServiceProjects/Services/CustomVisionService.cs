using Microsoft.Cognitive.CustomVision.Training;
using Microsoft.Cognitive.CustomVision.Training.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceProjects.Services
{
    public class CustomVisionService
    {
        private TrainingApi _trainingApi;
        const string projectId = "f263980e-3b19-49b8-8444-d97a0b67ed2b";

        public CustomVisionService()
        {
            // Add your training key from the settings page of the portal
            string trainingKey = "969f477f327346d7a907632e61e64430";

            // Create the Api, passing in the training key
            //_trainingApi = new TrainingApi() { ApiKey = trainingKey };
        }

        public void TrainModel()
        {
            //Project project = _trainingApi.GetProject(new Guid(projectId));
        }
    }
}
