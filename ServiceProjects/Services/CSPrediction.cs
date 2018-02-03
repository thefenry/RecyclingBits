using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace ServiceProjects.Services
{
    public static class CSPrediction
    {
        private static string _key { get; } = "d8fab3898adc430c80ad1669c875c4ff";
        private static string _url { get; } = "https://southcentralus.api.cognitive.microsoft.com/customvision/v1.1/Prediction/f263980e-3b19-49b8-8444-d97a0b67ed2b/image?iterationId=b17e369b-d99b-4a3b-b1ea-7ade0bfd1b24";

        static byte[] GetImageAsByteArray(Stream fileStream)
        {
            BinaryReader binaryReader = new BinaryReader(fileStream);
            return binaryReader.ReadBytes((int)fileStream.Length);
        }

        public static async Task<string> MakePredictionRequest(Stream fileStream)
        {
            var client = new HttpClient();
            client.DefaultRequestHeaders.Add("Prediction-Key", _key);
            HttpResponseMessage response;

            byte[] byteData = GetImageAsByteArray(fileStream);

            using (var content = new ByteArrayContent(byteData))
            {
                content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                response = await client.PostAsync(_url, content);
                return await response.Content.ReadAsStringAsync();
            }
        }
    }
}
