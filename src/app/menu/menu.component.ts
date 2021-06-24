import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menuItems: Array<{ title: string, path: string, icon: string }> = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems.push({
      title: 'ABOUT',
      path: '/',
      icon: 'fas fa-female'
    });
    this.menuItems.push({
      title: 'SERVICES',
      path: '/services',
      icon: 'fas fa-tools'
    });
    this.menuItems.push({
      title: 'RESUME',
      path: '/resume',
      icon: 'fas fa-file-alt'
    });
    this.menuItems.push({
      title: 'WORKS',
      path: '/works',
      icon: 'fas fa-paint-brush'
    });
  }

}
