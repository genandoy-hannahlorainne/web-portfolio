import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { TechStackComponent } from './components/tech-stack/tech-stack';
import { ProjectsComponent } from './components/projects/projects';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'tech-stack', component: TechStackComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' }
];
