using Microsoft.ProjectOxford.Vision.Contract;
using System.Threading.Tasks;

namespace Service.Interfaces
{
    public interface IComputerVisionService
    {
        Task<AnalysisResult> AnalyzeImageAsync(string imageString);
    }
}
