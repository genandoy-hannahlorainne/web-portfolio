import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  course: string;
  description: string;
  image: string;
  imageClass?: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'StudentCare+',
      course: 'Capstone Project',
      description:
        'A digital clinic management system for President Diosdado Macapagal High School that centralizes student health records, medical visits, QR access, health monitoring, and emergency SMS alerts across multiple user roles.',
      image: 'assets/images/projects/studentcare-landing-page.jpg',
      role: 'Project Manager / Developer',
      liveUrl: 'https://studentcare.site/',
      githubUrl: 'https://github.com/PUPT-4seasons-2026/4seasons',
      techStack: ['Angular', 'TypeScript', 'Laravel', 'MySQL', 'SCSS', 'Semaphore SMS', 'Docker', 'AWS Lightsail'],
    },
    {
      title: 'Pomodify',
      course: 'Application Development',
      description:
        'A customizable Pomodoro productivity tracker designed to help users focus with flexible timers, activity grouping, and comprehensive progress tracking.',
      image: 'assets/images/projects/pomodify.jpg',
      role: 'Project Manager / Developer',
      liveUrl: 'https://pomodify.site/',
      githubUrl: 'https://github.com/PUP-BSIT/project-g-cache',
      techStack: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL', 'SCSS', 'PWA', 'Service Workers', 'GitHub Actions', 'Swagger'],
    },
    {
      title: 'PawSight',
      course: 'Mobile Application Development',
      description:
        'A helpful Android utility app built with Flutter, designed for pet owners and accompanied with smart AI features.',
      image: 'assets/images/projects/pawsight.jpg',
      imageClass: 'contain',
      role: 'Developer',
      githubUrl: 'https://github.com/mejares-jamesmichael/project-pawsight',
      techStack: ['Flutter', 'Dart', 'Firebase'],
    },
    {
      title: 'DevHiveSpace',
      course: 'Web Development',
      description:
        'A cross-platform social-media web application for developers to connect, collaborate, and share knowledge.',
      image: 'assets/images/projects/devhive.jpg',
      role: 'UI/UX Developer',
      liveUrl: 'https://devhivespace.com/',
      githubUrl: 'https://github.com/PUP-BSIT/project-devhive',
      techStack: ['Angular', 'TypeScript', 'SCSS', 'Spring Boot', 'MySQL'],
    },
    {
      title: 'Eventure',
      course: 'Object-Oriented Programming',
      description:
        'A modern event management system designed to streamline all aspects of the event lifecycle—from registration and planning to monitoring and notifications.',
      image: 'assets/images/projects/eventure.jpg',
      role: 'Team Leader / Developer',
      githubUrl: 'https://github.com/genandoy-hannahlorainne/OOP_Eventure.git',
      techStack: ['Java', 'JavaFX', 'MySQL'],
    },
    {
      title: 'PDMHS Student Medical Record System',
      course: 'Information Management',
      description:
        'A Student Medical Record System web application for PDMHS, providing efficient management of student health records.',
      image: 'assets/images/projects/pdmhs.jpg',
      role: 'Project Manager / Developer',
      liveUrl: 'https://devhivepupt.great-site.net/',
      githubUrl: 'https://github.com/DEVHIVE-PROJECT-S/devhive-infoman',
      techStack: ['PHP', 'JavaScript', 'MySQL', 'CSS3', 'HTML5'],
    },
    {
      title: 'DBA Enrollment Management System',
      course: 'Database Management',
      description:
        'A comprehensive enrollment management system with role-based access control featuring student enrollment, section management, and course filtering. Built with PHP MVC architecture, implementing secure authentication, CSRF protection, and a custom Bento UI design system.',
      image: 'assets/images/projects/dba-enrollment-maintenance.jpg',
      role: 'Individual Project',
      githubUrl: 'https://github.com/genandoy-hannahlorainne/enrol_maintenance',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'HTML5'],
    },
    {
      title: 'Remote Desktop Manager',
      course: 'Operating Systems',
      description:
        'A modern PowerShell-based GUI application for managing multiple Remote Desktop Protocol (RDP) connections. Features a sleek WPF interface with secure credential handling, dynamic tab management, and automatic connection testing for seamless remote desktop management.',
      image: 'assets/images/projects/remote-desktop-manager.jpg',
      role: 'Project Manager / Developer',
      githubUrl: 'https://github.com/genandoy-hannahlorainne/remote-desktop-manager',
      techStack: ['PowerShell', 'WPF', 'C#', '.NET'],
    },
    {
      title: 'DevHive 16',
      course: 'Integrative Programming (Group Activity)',
      description:
        'A collaborative web development exercise featuring individual portfolio pages with retro-themed design. Includes interactive elements like calculators, speed tests, BMI calculators, and REST API CRUD operations with K-pop bands data.',
      image: 'assets/images/projects/devhive-ex-16.jpg',
      role: 'Individual Work',
      liveUrl: 'https://devhive-pupt.netlify.app/',
      githubUrl: 'https://github.com/PUP-BSIT/exercise-16-devhive',
      techStack: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
    },
  ];
}
