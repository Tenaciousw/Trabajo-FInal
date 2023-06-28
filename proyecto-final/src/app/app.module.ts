import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonAdministrationModule } from './person-administration/person-administration.module';
import { BusAdministrationModule } from './bus-administration/bus-administration.module';
import { TravelAdministrationModule } from './travel-administration/travel-administration.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonAdministrationModule,
    BusAdministrationModule,
    TravelAdministrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
