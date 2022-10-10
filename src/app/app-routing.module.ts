import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent } from './user-details/user-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { GetDetailsComponent } from './booking-details/get-details/get-details.component';


const routes: Routes = [
  {path: 'user-details',component:UserDetailsComponent},
  {path: 'event-details',component:EventDetailsComponent},
  {path:'booking-details',component:GetDetailsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
