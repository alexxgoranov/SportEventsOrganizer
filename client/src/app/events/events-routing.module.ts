import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events-component/events.component';


const EVENTS_ROUTES: Routes = [
  {
    path: 'events',
    component: EventsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(EVENTS_ROUTES)
  ]
})
export class EventsRoutingModule { }
