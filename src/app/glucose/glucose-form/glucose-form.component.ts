import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfigService } from '../../service/config.service';
import { GlucoseService } from '../../service/glucose-service.service';
import { Glucose } from '../glucose';

import * as moment from 'moment';
@Component({
  selector: 'app-glucose-form',
  templateUrl: './glucose-form.component.html',
  styleUrls: ['./glucose-form.component.scss']
})
export class GlucoseFormComponent implements OnInit {

  glucoseData: any = {
    registerId: null,
    date: null,
    hour: null,
    bloodGlucoseLevel: null,
    carbohydrates: null,
    basal: null,
    bolus: null,
    medicine: {
      name: null,
      quantity: null
    },
    events: {
      meal: [],
      humor: []
    },
    beforeOrAfter: null,
    observations: null,
  };

  paramUrl: any = "";

  configValues: any = {};

  events: any = {
    meal: [
      {
        type: "Fast",
        checked: false
      },
      {
        type: "Breakfast",
        checked: false
      },
      {
        type: "Brunch",
        checked: false
      },
      {
        type: "Lunch",
        checked: false
      },
      {
        type: "Tea",
        checked: false
      },
      {
        type: "Dinner",
        checked: false
      },
      {
        type: "Supper",
        checked: false
      },
      {
        type: "At bedtime",
        checked: false
      },
      {
        type: "Dawn",
        checked: false
      },
      {
        type: "Exercise",
        checked: false
      },
    ],
    humor: [
      {
        type: "Happy",
        checked: false
      },
      {
        type: "Tired out",
        checked: false
      },
      {
        type: "Stressed",
        checked: false
      },
      {
        type: "Riled up",
        checked: false
      },
      {
        type: "Sad",
        checked: false
      },
      {
        type: "Peaceful",
        checked: false
      },
      {
        type: "Excited",
        checked: false
      },
      {
        type: "Nervous",
        checked: false
      },
    ],
    others: []
  }

  constructor(
    private glucoseService: GlucoseService,
    private configService: ConfigService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.configValues = this.configService.getConfig();

    this.paramUrl = this.route.snapshot.paramMap.get('id');
    if (this.paramUrl) {
      this.glucoseData = this.glucoseService.getGlucoseById(this.paramUrl);
      this.setEvents();
    }
    else {
      this.glucoseData.beforeOrAfter = 'before';
      this.glucoseData.date = moment().format('YYYY-MM-DD');
      this.glucoseData.hour = moment().format('HH:mm');
    }
  }

  setEvents() {
    this.glucoseData.events.meal.forEach((item: any) => {
      if (item.checked) {
        const index = this.events.meal.findIndex((e: any) => e.type == item.type);
        this.events.meal[index].checked = item.checked
      }
    });

    this.glucoseData.events.humor.forEach((item: any) => {
      if (item.checked) {
        const index = this.events.humor.findIndex((e: any) => e.type == item.type);
        this.events.humor[index].checked = item.checked
      }
    });
  }

  chegaaqui(event: any){
    console.log("CEHGOU");
  }

  verifyEventByHour(_hour: any) {

  }

  checkItem(item: any, type: string) {
    if (type === 'meal') {
      this.glucoseData.events[type].forEach((element: { checked: boolean; }) => element.checked = false);
    }

    item.checked = !item.checked;

    const added = this.glucoseData.events[type].find((e: { type: any; }) => e.type == item.type);
    if (!added) {
      this.glucoseData.events[type].push(item);
    }

  }

  onlyNumbers(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]+/g, '');
  }

  onSubmit(glucoseData: Glucose) {

    if (this.paramUrl == null) {
      glucoseData.registerId = Math.random().toString(16).slice(2);
      this.glucoseService.setGlucose(glucoseData);
    }
    else 
    {
      this.glucoseService.updateGlucose(glucoseData);
    }
    this.router.navigate(['/glucose']);
  }

  cancel() {
    this.router.navigate(['/glucose']);
  }
}
