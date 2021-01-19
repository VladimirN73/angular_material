import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:StartComponent },
  { path: 'start', component:StartComponent },
  { path: 'datepicker', component:DemoDatepickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
