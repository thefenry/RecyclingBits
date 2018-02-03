using ServiceProjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace RecyclingAPI.Controllers
{
    [EnableCors(origins:"*", headers: "*", methods: "*")]
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
    }
}
