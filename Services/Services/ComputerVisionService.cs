using Microsoft.ProjectOxford.Vision;
using Microsoft.ProjectOxford.Vision.Contract;
using Service.Interfaces;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ComputerVisionService : IComputerVisionService
    {
        const string subscriptionKey = "c44dc045f85c4221875f49d80618edf6";

        const string uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze";
        private VisionServiceClient _visionServiceClient;
        public ComputerVisionService()
        {
            _visionServiceClient = new VisionServiceClient(subscriptionKey);           
        }

        public async Task<AnalysisResult> AnalyzeImageAsync(string imageString)
        {
            VisualFeature[] visualFeatures = new VisualFeature[] { VisualFeature.Categories, VisualFeature.Tags };

            AnalysisResult response = await _visionServiceClient.AnalyzeImageAsync(imageString, visualFeatures);

            return response;
        }
    }
}
