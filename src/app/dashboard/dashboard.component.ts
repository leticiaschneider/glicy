import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { GlucoseService } from './../service/glucose-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  glucoseData: any[] = [];
  configValues: any = {};

  type = 'line';
  data = {
    labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    datasets: [
      {
        label: "hypoglycemia",
        data: [0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: '#f6ab8b',
      },
      {
        label: "normal",
        data: [0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: '#afd7ce',
      },
      {
        label: "hyperglycemia",
        data: [0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: '#f56a63',
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor(
    private glucoseService: GlucoseService,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.glucoseData = this.glucoseService.getGlucose();
    this.configValues = this.configService.getConfig();
    this.setChart();
  }

  setChart() {
    this.glucoseData.map((item) => {
      let dayOfWeek = moment(item.date).day();

      if (item.bloodGlucoseLevel <=  this.configValues.hypoglycemia) {
        this.data.datasets[0].data[dayOfWeek]++;
      }
      else if(item.bloodGlucoseLevel >= this.configValues.hypoglycemia && item.bloodGlucoseLevel <= this.configValues.hyperglycemia) {
        this.data.datasets[1].data[dayOfWeek]++;
      }
      else if(item.bloodGlucoseLevel >= this.configValues.hyperglycemia) {
        this.data.datasets[2].data[dayOfWeek]++;
      }

    });
  }

}