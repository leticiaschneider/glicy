import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  private mealData: Array<any> = [
    {
      dayOfWeek: "Monday",
      breakfast: {
        title: "Breakfast",
        description: "",
        editOpen: false
      },
      lunch: {
        title: "Lunch",
        description: "",
        editOpen: false
      },
      dinner: {
        title: "Dinner",
        description: "",
        editOpen: false
      },
      snack: {
        title: "Snack",
        description: "",
        editOpen: false
      }
    },
    {
      dayOfWeek: "Tuesday",
      breakfast: {
        title: "Breakfast",
        description: "",
        editOpen: false
      },
      lunch: {
        title: "Lunch",
        description: "",
        editOpen: false
      },
      dinner: {
        title: "Dinner",
        description: "",
        editOpen: false
      },
      snack: {
        title: "Snack",
        description: "",
        editOpen: false
      }
    },
    {
      dayOfWeek: "Wednesday",
      breakfast: {
        title: "Breakfast",
        description: "",
        editOpen: false
      },
      lunch: {
        title: "Lunch",
        description: "",
        editOpen: false
      },
      dinner: {
        title: "Dinner",
        description: "",
        editOpen: false
      },
      snack: {
        title: "Snack",
        description: "",
        editOpen: false
      }
    },
    {
      dayOfWeek: "Thursday",
      breakfast: {
        title: "Breakfast",
        description: "",
        editOpen: false
      },
      lunch: {
        title: "Lunch",
        description: "",
        editOpen: false
      },
      dinner: {
        title: "Dinner",
        description: "",
        editOpen: false
      },
      snack: {
        title: "Snack",
        description: "",
        editOpen: false
      }
    },
    {
      dayOfWeek: "Friday",
      breakfast: {
        title: "Breakfast",
        description: "",
        editOpen: false
      },
      lunch: {
        title: "Lunch",
        description: "",
        editOpen: false
      },
      dinner: {
        title: "Dinner",
        description: "",
        editOpen: false
      },
      snack: {
        title: "Snack",
        description: "",
        editOpen: false
      }
    },
    {
      dayOfWeek: "Saturday",
      breakfast: {
        title: "Breakfast",
        description: "",
        editOpen: false
      },
      lunch: {
        title: "Lunch",
        description: "",
        editOpen: false
      },
      dinner: {
        title: "Dinner",
        description: "",
        editOpen: false
      },
      snack: {
        title: "Snack",
        description: "",
        editOpen: false
      }
    },
    {
      dayOfWeek: "Sunday",
      breakfast: {
        title: "Breakfast",
        description: "",
        editOpen: false
      },
      lunch: {
        title: "Lunch",
        description: "",
        editOpen: false
      },
      dinner: {
        title: "Dinner",
        description: "",
        editOpen: false
      },
      snack: {
        title: "Snack",
        description: "",
        editOpen: false
      }
    }
  ];

  constructor() {
  }

  setMeal(mealData: any) {
    this.mealData.push(mealData);
  }

  getMeal() {
    return this.mealData;
  }
}