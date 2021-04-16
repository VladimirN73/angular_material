import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCourseStep1Component } from './angular-university/create-course-step1/create-course-step1.component';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:StartComponent },
  { path: 'start', component:StartComponent },
  { path: 'datepicker', component:DemoDatepickerComponent },
  { path: 'create-course', component:CreateCourseStep1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
