﻿using Microsoft.ProjectOxford.Vision.Contract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceProjects.Interfaces
{
    public interface IKeywordGeneratorService
    {
        List<string> GenerateMetaVisionTags(AnalysisResult analysisResult); 
    }
}
