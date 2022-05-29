import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlucoseListComponent } from './glucose-list.component';
import { GlucoseFormComponent } from './glucose-form/glucose-form.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', component: GlucoseListComponent },
    { path: 'update/:id', component: GlucoseFormComponent },
    { path: 'new', component: GlucoseFormComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlucoseRoutingModule { }
