import { Component, OnInit } from '@angular/core';
import { MealServiceService } from './../service/meal-service.service';

@Component({
  selector: 'app-meal-planning',
  templateUrl: './meal-planning.component.html',
  styleUrls: ['./meal-planning.component.scss']
})
export class MealPlanningComponent implements OnInit {

  mealPlan: any[] = [];
  mealList: any[] = ["breakfast", "lunch", "dinner", "snack"];

  constructor(private mealServiceService: MealServiceService) { }

  ngOnInit(): void {
    this.mealPlan = this.mealServiceService.getMeal();
  }

  openInput(meal: any, typeOfMeal: string) {
    meal[typeOfMeal].editOpen = !meal[typeOfMeal].editOpen;
  }

  autoGrowTextZone(e: any) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 15) + "px";
  }
}
