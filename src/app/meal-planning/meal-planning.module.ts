import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MealPlanningRoutingModule } from './meal-planning-routing.module';
import { MealPlanningComponent } from './meal-planning.component';


@NgModule({
  declarations: [MealPlanningComponent],
  imports: [
    CommonModule,
    FormsModule,
    MealPlanningRoutingModule
  ]
})
export class MealPlanningModule { }