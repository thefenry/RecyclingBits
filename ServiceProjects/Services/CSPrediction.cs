using System;
using System.Collections.Generic;
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
        private static string _url { get; } = "http://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/prediction/f263980e-3b19-49b8-8444-d97a0b67ed2/image";

        //static byte[] GetImageAsByteArray(string imageFilePath)
        //{
        //    FileStream fileStream = new FileStream(imageFilePath, FileMode.Open, FileAccess.Read);
        //    BinaryReader binaryReader = new BinaryReader(fileStream);
        //    return binaryReader.ReadBytes((int)fileStream.Length);
        //}

        public static async Task<string> MakePredictionRequest(byte[] byteData)
        {
            var client = new HttpClient();
            client.DefaultRequestHeaders.Add("Prediction-Key", _key);
            HttpResponseMessage response;

            //byte[] byteData = GetImageAsByteArray(imageFilePath);

            using (var content = new ByteArrayContent(byteData))
            {
                content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                response = await client.PostAsync(_url, content);
                return await response.Content.ReadAsStringAsync();
            }
        }
    }
}
