import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events:any =[ 
    {
      id: 1,
      name:"Table tennis tournament",
      location: "Sports Sofia",
      participants:100,
      startData: "10.10.2021",
      startHour: "15:00",
      award: "100lv",
      hoursDuration: 5
    },
    {
      id: 2,
      name:"Table tennis tournament 2",
      location: "Sports Sofia",
      participants:100,
      startData: "10.10.2021",
      startHour: "15:00",
      award: "100lv",
      hoursDuration: 5
    },
    {
      id: 3,
      name:"Table tennis tournament 3",
      location: "Sports Sofia",
      participants:100,
      startData: "10.10.2021",
      startHour: "15:00",
      award: "100lv",
      hoursDuration: 5
    }
  ]
  constructor() { }

  ngOnInit(): void {
    console.log('hERRE');
  }

}
