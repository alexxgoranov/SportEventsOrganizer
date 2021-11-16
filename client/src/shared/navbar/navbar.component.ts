import { Component, OnInit } from '@angular/core';


interface NavBarMenu {
  route: string;
  roles: Array<string>;
  icon?: string;
  name: string;

}

const allNavbarItems = [
  {
    route: '/events',
    icon: 'fas fa-wifi',
    roles: ['admin', 'user'],
    name: 'Events'
  },
  {
    route: '/events-statistics',
    icon: 'fas fa-chart-pie',
    roles: ['admin', 'user'],
    name: 'System statistics'
  },
  {
    route: '/users',
    icon: 'fas fa-users',
    roles: ['admin'],
    name: 'System users'
  },
  {
    route: '/my-profile',
    icon: 'fas fa-user-tie',
    roles: ['admin', 'user'],
    name: 'My profile'
  },
  {
    route: '/pages/login',
    roles: ['admin', 'user'],
    icon: 'fas fa-sign-out-alt',
    name: 'Exit'
  }
];
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent implements OnInit {


  navItems:NavBarMenu[] = [];
  constructor() { }

  ngOnInit(): void {
    this.navItems = allNavbarItems // TO DO filter for every role
  }


  onClickLiElement(route: string) {

  }

}
