import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoDatepickerComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
