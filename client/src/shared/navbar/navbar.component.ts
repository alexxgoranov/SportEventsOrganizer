import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


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

  sidebarExpanded: boolean;
  @ViewChild('navUl', { static: true }) navUl: ElementRef
  navItems:NavBarMenu[] = [];
  constructor() { }

  ngOnInit(): void {
    this.navItems = allNavbarItems // TO DO filter for every role
  }


  onClickLiElement(route: string) {

  }

  clickBars(): void {
    this.sidebarExpanded = !this.sidebarExpanded;
    if (this.sidebarExpanded) {
      this.navUl.nativeElement.style.left = 0;
    } else {
      this.navUl.nativeElement.style.left = -100 + '%';
    }
  }

}
