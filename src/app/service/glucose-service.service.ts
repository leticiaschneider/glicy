import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlucoseService {

  private glucoseData: Array<any> = [
    {
      "registerId": "1",
      "date": "2022-05-09",
      "hour": "7:22",
      "bloodGlucoseLevel": 71,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "2",
      "date": "2022-05-09",
      "hour": "12:41",
      "bloodGlucoseLevel": 210,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "3",
      "date": "2022-05-09",
      "hour": "17:41",
      "bloodGlucoseLevel": 99,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "4",
      "date": "2022-05-08",
      "hour": "07:12",
      "bloodGlucoseLevel": 54,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "5",
      "date": "2022-05-08",
      "hour": "12:25",
      "bloodGlucoseLevel": 191,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "6",
      "date": "2022-05-08",
      "hour": "17:41",
      "bloodGlucoseLevel": 78,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "7",
      "date": "2022-05-07",
      "hour": "7:31",
      "bloodGlucoseLevel": 222,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "8",
      "date": "2022-05-07",
      "hour": "13:44",
      "bloodGlucoseLevel": 122,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "9",
      "date": "2022-14-07",
      "hour": "22:41",
      "bloodGlucoseLevel": 390,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "10",
      "date": "2022-05-14",
      "hour": "17:41",
      "bloodGlucoseLevel": 124,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "11",
      "date": "2022-05-14",
      "hour": "17:41",
      "bloodGlucoseLevel": 54,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "12",
      "date": "2022-05-14",
      "hour": "17:41",
      "bloodGlucoseLevel": 120,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "13",
      "date": "2022-05-05",
      "hour": "17:41",
      "bloodGlucoseLevel": 99,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "14",
      "date": "2022-05-05",
      "hour": "17:41",
      "bloodGlucoseLevel": 111,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "15",
      "date": "2022-05-05",
      "hour": "23:33",
      "bloodGlucoseLevel": 201,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "16",
      "date": "2022-05-04",
      "hour": "11:31",
      "bloodGlucoseLevel": 76,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "17",
      "date": "2022-05-04",
      "hour": "22:42",
      "bloodGlucoseLevel": 231,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    },
    {
      "registerId": "17",
      "date": "2022-05-03",
      "hour": "17:41",
      "bloodGlucoseLevel": 99,
      "carbohydrates": 34,
      "basal": null,
      "bolus": null,
      "medicine": {
        "name": null,
        "quantity": null
      },
      "events": {
        "meal": [
          {
            "type": "Brunch",
            "checked": true
          }
        ],
        "humor": [
          {
            "type": "Sad",
            "checked": true
          }
        ]
      },
      "beforeOrAfter": "before",
      "observations": null
    }
  ];

  constructor() {
  }

  setGlucose(glucoseData: any) {
    this.glucoseData.push(glucoseData);
  }

  getGlucose() {
    return this.glucoseData;
  }

  updateGlucose(glucoseData: any) {
    const index = this.glucoseData.findIndex((element) => element.registerId === glucoseData.registerId);
    this.glucoseData.splice(index, 1, glucoseData);
  }

  getGlucoseById(id: string) {
    return this.glucoseData.find(element => element.registerId == id)
  }

  removeGlucose(glucoseData: any) {
    const index = this.glucoseData.findIndex((element) => element.registerId === glucoseData.registerId);
    this.glucoseData.splice(index, 1);
  }

}
