import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RealTimeCharts-Client';

  public chartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  public chartLabels: string[] = ['Real time data for the chart'];
  public chartType: string = 'bar';
  public chartLegend: boolean = true;
  public colors: any[] = [
    { backgroundColor: '#5491DA' },
    { backgroundColor: '#E74C3C' },
    { backgroundColor: '#82E0AA' },
    { backgroundColor: '#E5E7E9' },
  ];

  constructor(
    public signalService: SignalRService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.signalService.startConnection();
    this.signalService.addTransferChartDataListener();
    this.signalService.addBroadcastChartDataListener();
    this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.get('https://localhost:44334/api/chart').subscribe((res) => {
      console.log(res);
    });
  };


  public chartClicked =(event)=>{
    console.log(event);
    this.signalService.broadcastChartData();

  }

}
