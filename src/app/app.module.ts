import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { ShowDetailsComponent } from './user-details/show-details/show-details.component';
import { AddDetailsComponent } from './user-details/add-details/add-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ShowEvntDetComponent } from './event-details/show-evnt-det/show-evnt-det.component';
import { AddEvntDetComponent } from './event-details/add-evnt-det/add-evnt-det.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import  {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { GetDetailsComponent } from './booking-details/get-details/get-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ShowDetailsComponent,
    AddDetailsComponent,
    EventDetailsComponent,
    ShowEvntDetComponent,
    AddEvntDetComponent,
    BookingDetailsComponent,
    GetDetailsComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
