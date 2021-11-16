import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events-component/events.component';
import { ParticipantsComponent } from './participants/participants.component';


const EVENTS_ROUTES: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    children: [{
      path: 'participants',
      component: ParticipantsComponent
    }]
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(EVENTS_ROUTES)
  ]
})
export class EventsRoutingModule { }
