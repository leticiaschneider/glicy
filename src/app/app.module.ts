import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './utils/menu/menu.component';
import { QuestionsComponent } from './questions/questions.component';
import { RangeSliderComponent } from './utils/range-slider/range-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuestionsComponent,
    RangeSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
