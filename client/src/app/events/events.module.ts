import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events-component/events.component';
import { EventsRoutingModule } from './events-routing.module';
import { ParticipantsComponent } from './participants/participants.component';



@NgModule({
  declarations: [EventsComponent, ParticipantsComponent],
  imports: [
    CommonModule, 
    EventsRoutingModule
  ]
})
export class EventsModule { }
