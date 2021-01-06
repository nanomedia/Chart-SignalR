﻿using RealTimesCharts_server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealTimesCharts_server.DataStorage
{
    public static class DataManager
    {
        public static List<ChartModel> GetData()
        {
            var r = new Random();
            return new List<ChartModel>
            {
                new ChartModel
                {
                    Data= new List<int>{ r.Next(1,40) },
                    Label = "Data1"
                },
                new ChartModel
                {
                    Data= new List<int>{ r.Next(1,40) },
                    Label = "Data2"
                },
                 new ChartModel
                {
                    Data= new List<int>{ r.Next(1,40) },
                    Label = "Data3"
                },
                  new ChartModel
                {
                    Data= new List<int>{ r.Next(1,40) },
                    Label = "Data4"
                }
            };
        }
    }
}