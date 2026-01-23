import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { AboutMeComponent } from './components/about-me/about-me';
import { TechStackComponent } from './components/tech-stack/tech-stack';
import { ProjectsComponent } from './components/projects/projects';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'tech-stack', component: TechStackComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' }
];
