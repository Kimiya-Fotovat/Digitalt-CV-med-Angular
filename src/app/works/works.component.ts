import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html'
})
export class WorksComponent implements OnInit {
  worksList: Array<{title: string, titleContainer: string, description: string, imagePath: string}> = [];

  constructor(private route: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.route.snapshot.data.title || 'About Me');

    this.worksList.push({
      title: 'Skincosmetics',
      titleContainer: 'pt-3',
      description: 'WordPress',
      imagePath: 'assets/img/skincosmetics.png'
    });
    this.worksList.push({
      title: 'Satellite Download Center',
      titleContainer: 'pt-4',
      description: 'FrontEnd',
      imagePath: 'assets/img/satdl.png'
    });
  }

}
