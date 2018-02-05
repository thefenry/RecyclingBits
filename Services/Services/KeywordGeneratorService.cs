using Microsoft.ProjectOxford.Vision.Contract;
using Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Service.Services
{
    public class KeywordGeneratorService: IKeywordGeneratorService
    {
        public List<string> GenerateMetaVisionTags(AnalysisResult analysisResult)
        {
            List<string> metaTags = new List<string>();

            GetCategories(analysisResult, metaTags);

            GetTagNames(analysisResult, metaTags);

            return metaTags;
        }

        private static void GetCategories(AnalysisResult analysisResult, List<string> metaTags)
        {
            metaTags.AddRange(analysisResult.Categories.Where(x => x.Score > .75).Select(c => c.Name).ToList());
        }

        private static void GetTagNames(AnalysisResult analysisResult, List<string> metaTags)
        {
            metaTags.AddRange(analysisResult.Tags.Where(x => x.Confidence > .75).Select(c => c.Name).ToList());
        }
    }
}
