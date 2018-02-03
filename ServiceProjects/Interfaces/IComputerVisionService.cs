using Microsoft.ProjectOxford.Vision.Contract;
using System.Threading.Tasks;

namespace ServiceProjects.Interfaces
{
    public interface IComputerVisionService
    {
        Task<AnalysisResult> AnalyzeImageAsync(string imageString);
    }
}
