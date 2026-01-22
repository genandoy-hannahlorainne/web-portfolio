import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { AboutComponent } from './components/about/about';
import { TechStackComponent } from './components/tech-stack/tech-stack';
import { ProjectsComponent } from './components/projects/projects';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, TechStackComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'portfolio';
}
