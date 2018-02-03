using Microsoft.ProjectOxford.Vision.Contract;
using ServiceProjects.Interfaces;
using ServiceProjects.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImageIngestionApp
{
    class Program
    {
        static void Main(string[] args)
        {
            IComputerVisionService computerVisionClient = new ComputerVisionService();

            AnalysisResult response = computerVisionClient.AnalyzeImageAsync("https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=8389163").Result;

            Console.WriteLine(response);
            Console.ReadLine();
        }
    }
}
