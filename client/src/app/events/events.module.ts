import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events-component/events.component';
import { EventsRoutingModule } from './events-routing.module';
import { ParticipantsComponent } from './participants/participants.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EventsComponent, ParticipantsComponent],
  imports: [
    CommonModule, 
    EventsRoutingModule,
    RouterModule
  ]
})
export class EventsModule { }
