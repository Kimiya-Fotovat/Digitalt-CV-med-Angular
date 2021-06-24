import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
  servicesList: Array<{title: string, titleContainer: string, icon: string, iconContainer: string, children: string[]}> = [];

  constructor(private route: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.route.snapshot.data.title || 'About Me');

    this.servicesList.push({
      title: 'FRONT-END',
      titleContainer: 'mt-1',
      icon: 'fab fa-html5',
      iconContainer: 'd-flex shape1',
      children: [
        'HTML / CSS',
        'Bootstrap / SASS',
        'jQuery',
        'VUE JS',
        'React Js',
        'Angular'
      ]
    });
    this.servicesList.push({
      title: 'BACK-END',
      titleContainer: '',
      icon: 'fas fa-code',
      iconContainer: 'd-flex shape2',
      children: [
        'Node.js',
        'PHP',
        'OOP Programming'
      ]
    });
    this.servicesList.push({
      title: 'Wordpress',
      titleContainer: 'mt-1',
      icon: 'fab fa-wordpress',
      iconContainer: 'd-flex shape3 mt-3',
      children: [
        'Node.js',
        'PHP',
        'OOP Programming'
      ]
    });
    this.servicesList.push({
      title: 'Wordpress',
      titleContainer: 'mt-1',
      icon: 'fas fa-paint-brush',
      iconContainer: 'd-flex shape3 mt-3',
      children: [
        'InVisionApp',
        'Adobe XD',
        'Sketch'
      ]
    });
  }

}
