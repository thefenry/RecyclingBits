using Microsoft.Cognitive.CustomVision.Prediction.Models;
using ServiceProjects;
using ServiceProjects.Services;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace RecyclingAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RecyclingController : ApiController
    {

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        [HttpPost]
        [ActionName("GetPrediction")]
        public async Task<string> GetPredictionAsync([FromBody]byte[] value)
        {
            return await CSPrediction.MakePredictionRequest(value);
        }

        [HttpPost]
        [ActionName("Prediction")]
        public IList<ImageTagPredictionModel> PredictionAsync()
        {
            var httpRequest = HttpContext.Current.Request;

            foreach (string file in httpRequest.Files)
            {
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);

                var postedFile = httpRequest.Files[file];
                using (var stream = postedFile.InputStream)
                {
                    ComputerVisionClient computerVisionClient = new ComputerVisionClient();
                    var result = computerVisionClient.GetResult(stream);
                    return result.Predictions;
                }
              
            }

            return default(IList<ImageTagPredictionModel>);
        }
    }
}
