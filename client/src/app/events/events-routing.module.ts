import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events-component/events.component';
import { ParticipantsComponent } from './participants/participants.component';


const EVENTS_ROUTES: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: 'participants/:id',
    component: ParticipantsComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(EVENTS_ROUTES)
  ],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
