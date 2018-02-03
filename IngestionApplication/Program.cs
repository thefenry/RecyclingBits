using Microsoft.Cognitive.CustomVision.Training;
using Microsoft.ProjectOxford.Vision.Contract;
using ServiceProjects.Interfaces;
using ServiceProjects.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IngestionApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            IComputerVisionService computerVisionClient = new ComputerVisionService();
            IKeywordGeneratorService keywordGeneratorService = new KeywordGeneratorService();

            AnalysisResult analysisResult = computerVisionClient.AnalyzeImageAsync("https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=8389163").Result;

            List<string> keywords = keywordGeneratorService.GenerateMetaVisionTags(analysisResult);

            // Add your training key from the settings page of the portal
            string trainingKey = "969f477f327346d7a907632e61e64430";

            // Create the Api, passing in the training key
            TrainingApi trainingApi = new TrainingApi() { ApiKey = trainingKey };

            // Create a new project
            Console.WriteLine("Creating new project:");
            var project = trainingApi.CreateProject("My New Project");

            // Make two tags in the new project
            var hemlockTag = trainingApi.CreateTag(project.Id, "Hemlock");
            var japaneseCherryTag = trainingApi.CreateTag(project.Id, "Japanese Cherry");

            // Add some images to the tags
            //Console.WriteLine("\tUploading images");
            //LoadImagesFromDisk();

            // Images can be uploaded one at a time
            //foreach (var image in hemlockImages)
            //{
            //    using (var stream = new MemoryStream(File.ReadAllBytes(image)))
            //    {
            //        trainingApi.CreateImagesFromData(project.Id, stream, new List<string>() { hemlockTag.Id.ToString() });
            //    }
            //}

            // Or uploaded in a single batch 
            //var imageFiles = japaneseCherryImages.Select(img => new ImageFileCreateEntry(Path.GetFileName(img), File.ReadAllBytes(img))).ToList();
            //trainingApi.CreateImagesFromFiles(project.Id, new ImageFileCreateBatch(imageFiles, new List<Guid>() { japaneseCherryTag.Id }));

            //// Now there are images with tags start training the project
            //Console.WriteLine("\tTraining");
            //var iteration = trainingApi.TrainProject(project.Id);

            //// The returned iteration will be in progress, and can be queried periodically to see when it has completed
            //while (iteration.Status == "Training")
            //{
            //    Thread.Sleep(1000);

            //    // Re-query the iteration to get it's updated status
            //    iteration = trainingApi.GetIteration(project.Id, iteration.Id);
            //}

            // The iteration is now trained. Make it the default project endpoint
            //iteration.IsDefault = true;
            //trainingApi.UpdateIteration(project.Id, iteration.Id, iteration);
            //Console.WriteLine("Done!\n");

            //// Now there is a trained endpoint, it can be used to make a prediction

            //// Add your prediction key from the settings page of the portal
            //// The prediction key is used in place of the training key when making predictions
            //string predictionKey = "<your key here>";

            //// Create a prediction endpoint, passing in obtained prediction key
            //PredictionEndpoint endpoint = new PredictionEndpoint() { ApiKey = predictionKey };

            //// Make a prediction against the new project
            //Console.WriteLine("Making a prediction:");
            //var result = endpoint.PredictImage(project.Id, testImage);

            //// Loop over each prediction and write out the results
            //foreach (var c in result.Predictions)
            //{
            //    Console.WriteLine($"\t{c.Tag}: {c.Probability:P1}");
            //}
            //Console.ReadKey();
        }

        //private static void LoadImagesFromDisk()
        //{
        //    // this loads the images to be uploaded from disk into memory
        //    hemlockImages = Directory.GetFiles(@"..\..\..\Images\Hemlock").ToList();
        //    japaneseCherryImages = Directory.GetFiles(@"..\..\..\Images\Japanese Cherry").ToList();
        //    testImage = new MemoryStream(File.ReadAllBytes(@"..\..\..\Images\Test\test_image.jpg"));
        //}
    }
}
