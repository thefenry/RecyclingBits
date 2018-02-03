using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace ServiceProjects
{
    public static class CSPrediction
    {
        private static string _key { get; } = "d8fab3898adc430c80ad1669c875c4ff";
        private static string _url { get; } = "http://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/prediction/d16e136c-5b0b-4b84-9341-6a3fff8fa7fe/image?iterationId=f4e573f6-9843-46db-8018-b01d034fd0f2";

        public static async Task<string> MakePredictionRequest(byte[] byteData)
        {
            var client = new HttpClient();
            client.DefaultRequestHeaders.Add("Prediction-Key", _key);
            HttpResponseMessage response;

            using (var content = new ByteArrayContent(byteData))
            {
                content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                response = await client.PostAsync(_url, content);
                return await response.Content.ReadAsStringAsync();
            }
        }
    }
}
