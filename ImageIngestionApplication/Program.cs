using Microsoft.Cognitive.CustomVision.Prediction;
using Microsoft.Cognitive.CustomVision.Training;
using Microsoft.Cognitive.CustomVision.Training.Models;
using Microsoft.ProjectOxford.Vision.Contract;
using ServiceProjects.Interfaces;
using ServiceProjects.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;

namespace CustomVision.Sample
{
    class Program
    {
        static void Main(string[] args)
        {
            IComputerVisionService computerVisionClient = new ComputerVisionService();
            IKeywordGeneratorService keywordGeneratorService = new KeywordGeneratorService();            

            string url = "https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=8389163";

            AnalysisResult analysisResult = computerVisionClient.AnalyzeImageAsync(url).Result;

            List<string> keywords = keywordGeneratorService.GenerateMetaVisionTags(analysisResult);

            // Add your training key from the settings page of the portal
            string trainingKey = "969f477f327346d7a907632e61e64430";

            // Create the Api, passing in the training key
            TrainingApi trainingApi = new TrainingApi() { ApiKey = trainingKey };

            var project = trainingApi.GetProject(new Guid("f263980e-3b19-49b8-8444-d97a0b67ed2b"));

            List<Guid> tagIds = new List<Guid>();
            foreach (var item in keywords)
            {
                var tag = trainingApi.CreateTag(project.Id, item);
                
                tagIds.Add(tag.Id);
            }

            Console.WriteLine("Uploading Image");
            
            List<ImageUrlCreateEntry> imageList = new List<ImageUrlCreateEntry>();
            imageList.Add(new ImageUrlCreateEntry(url, tagIds));

            var imagebatch = new ImageUrlCreateBatch(imageList);

          var response = trainingApi.CreateImagesFromUrls(project.Id, imagebatch);        
          
        }       
    }
}
