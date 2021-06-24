import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
    {
        path: 'about', pathMatch: 'full', component: AboutComponent, data: { title: 'About Me' }
    },
    {
        path: 'services', component: ServicesComponent, data: { title: 'Services' }
    },
    {
        path: 'works', component: WorksComponent, data: { title: 'Works' }
    },
    {
        path: 'resume', component: ResumeComponent, data: { title: 'Resume' }
    },
    {
        path: 'contact', component: ContactComponent, data: { title: 'Contact' }
    },
    {
        path: '**', redirectTo: '/about'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}