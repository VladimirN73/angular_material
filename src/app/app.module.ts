import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';
import { StartComponent } from './start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CreateCourseStep1Component } from './angular-university/create-course-step1/create-course-step1.component';
import { FileUploadComponent } from './angular-university/file-upload/file-upload.component';
import { CreateCourseStep2Component } from './angular-university/create-course-step2/create-course-step2.component';
import { AddressFormComponent } from './angular-university/address-form/address-form.component'
@NgModule({
  declarations: [
    AppComponent,
    DemoDatepickerComponent,
    StartComponent,
    CreateCourseStep1Component,
    FileUploadComponent,
    CreateCourseStep2Component,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
