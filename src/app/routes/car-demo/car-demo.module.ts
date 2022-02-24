import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', redirectTo: 'forms', pathMatch: 'full'
  },
  {
    path: 'forms', component: FormsComponent,
    data: {
      reload: true,
      hash: 'car-forms'
    }
  }
];

@NgModule({
  declarations: [FormsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CarDemoModule { }
