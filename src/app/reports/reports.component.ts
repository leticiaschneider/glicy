import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { GlucoseService } from '../service/glucose-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  glucoseData: any[] = [];
  configValues: any = {};
  isDataExisteForToday: boolean = false;

  weekSummary = {
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

  daySummary = {
    labels: [
      'Hypoglycemia',
      'Normal',
      'Hyperglycemia'
    ],
    datasets: [{
      data: [0, 0, 0],
      backgroundColor: [
        '#f6ab8b',
        '#afd7ce',
        '#f56a63'
      ],
      hoverOffset: 4
    }]
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

    this.setChartWeek();
    this.setChartDay();
  }

  setChartWeek() {
    this.glucoseData.map((item) => {
      let dayOfWeek = moment(item.date).day();

      if (item.bloodGlucoseLevel <= this.configValues.hypoglycemia) {
        this.weekSummary.datasets[0].data[dayOfWeek]++;
      }
      else if (item.bloodGlucoseLevel >= this.configValues.hypoglycemia && item.bloodGlucoseLevel <= this.configValues.hyperglycemia) {
        this.weekSummary.datasets[1].data[dayOfWeek]++;
      }
      else if (item.bloodGlucoseLevel >= this.configValues.hyperglycemia) {
        this.weekSummary.datasets[2].data[dayOfWeek]++;
      }

    });
  }

  setChartDay() {
    this.isDataExisteForToday = false;
    this.glucoseData.map((item) => {
      let oi = moment(item.date).format('YYYY-MM-DD')
      let tudo = moment().format('YYYY-MM-DD');
      if (moment(item.date).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD')) {
        if (item.bloodGlucoseLevel <= this.configValues.hypoglycemia) {
          this.daySummary.datasets[0].data[0]++;
        }
        else if (item.bloodGlucoseLevel >= this.configValues.hypoglycemia && item.bloodGlucoseLevel <= this.configValues.hyperglycemia) {
          this.daySummary.datasets[0].data[1]++;
        }
        else if (item.bloodGlucoseLevel >= this.configValues.hyperglycemia) {
          this.daySummary.datasets[0].data[2]++;
        }
        this.isDataExisteForToday = true;
      }

    });
  }
}