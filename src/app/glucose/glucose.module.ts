import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GlucoseListComponent } from './glucose-list.component';
import { GlucoseRoutingModule } from './glucose-routing.module';
import { PaginationComponent } from '../utils/pagination/pagination.component';
import { GlucoseFormComponent } from './glucose-form/glucose-form.component';
import { ModalComponent } from '../utils/modal/modal.component';

@NgModule({
  declarations: [GlucoseListComponent, GlucoseFormComponent, PaginationComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    GlucoseRoutingModule
  ]
})
export class GlucoseModule { }
