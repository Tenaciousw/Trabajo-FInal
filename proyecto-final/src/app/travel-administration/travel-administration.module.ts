import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';



@NgModule({
  declarations: [
    TravelDetailComponent
  ],
  exports: [TravelDetailComponent],
  imports: [
    CommonModule
  ]
})
export class TravelAdministrationModule { }
