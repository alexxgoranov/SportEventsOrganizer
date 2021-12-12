import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from 'src/app/counter.actions';

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

  count$: Observable<number>;
  sidebarExpanded: boolean;
  @ViewChild('navUl', { static: true }) navUl: ElementRef
  navItems: NavBarMenu[] = [];
  constructor(private store: Store<{count: number}>) { 
    this.count$ = store.select('count');

  }

  ngOnInit(): void {
    this.navItems = allNavbarItems; // TO DO filter for every role
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

  increment(): void{
    this.store.dispatch(increment());

  }

  decrement(): void {
    this.store.dispatch(decrement());

  }

  reset(): void {
    this.store.dispatch(reset());
  }




}
