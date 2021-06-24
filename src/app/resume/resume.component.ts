import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {
  experiencesList: Array<{yearStart: number, yearEnd: number, yearContainer: string, title: string, place: string, task: string}> = [];
  educationsList: Array<{yearStart: number, yearEnd: number, yearContainer: string, title: string, place: string, task: string}> = [];

  constructor(private route: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.route.snapshot.data.title || 'About Me');

    // Experiences

    this.experiencesList.push({
      yearStart: 2015,
      yearEnd: 2017,
      yearContainer: 'border years text-center',
      title: 'Web/Software developer',
      place: 'Mirab Saanat Rastin, Shiraz',
      task: 'Optimize website and apps performance and collaborate with creative and development teams'
    });
    this.experiencesList.push({
      yearStart: 2013,
      yearEnd: 2015,
      yearContainer: 'border years text-center',
      title: 'Junior Software Developer',
      place: 'Bamdad, Shiraz',
      task: 'Monitored technical aspects of the front-end delivery for projects.'
    });
    this.experiencesList.push({
      yearStart: 2012,
      yearEnd: 2013,
      yearContainer: 'border years text-center',
      title: 'IT Support center',
      place: 'Asia insurance agency, Shiraz',
      task: 'investigating, diagnosing and solving software faults'
    });

    // Educations

    this.educationsList.push({
      yearStart: 2020,
      yearEnd: 2022,
      yearContainer: 'active text-center',
      title: 'Polytechnic degree',
      place: 'Sweden,Västerås',
      task: 'Frontend developer'
    });
    this.educationsList.push({
      yearStart: 2013,
      yearEnd: 2016,
      yearContainer: 'border years text-center',
      title: 'Bachelore degree',
      place: 'Iran, Shiraz',
      task: 'Computer science, Software engineering'
    });
  }

}
