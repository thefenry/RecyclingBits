using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RecyclingAPI.Models
{
    public class R_CS
    {
        public List<R_CS_Prediction> Predictions { get; set; }
    }

    public class R_CS_Prediction
    {
        public decimal Probability { get; set; }
        public string Tag { get; set; }
    }
}