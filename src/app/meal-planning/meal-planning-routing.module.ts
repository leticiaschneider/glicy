import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealPlanningComponent } from './meal-planning.component';

const routes: Routes = [
  { path: '', component: MealPlanningComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealPlanningRoutingModule { }
