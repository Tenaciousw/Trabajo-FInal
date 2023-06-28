import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusDetailComponent } from './bus-detail/bus-detail.component';



@NgModule({
  declarations: [
    BusDetailComponent
  ],
  exports: [BusDetailComponent],
  imports: [
    CommonModule
  ]
})
export class BusAdministrationModule { }
