import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'CISCO Network Defense in Cybersecurity',
      date: 'October 2026',
      logo: 'assets/certifications-logo/cisco-network-defense-logo.png',
      link: 'https://drive.google.com/file/d/17wIG2YgxDAqIjCqkLWdOrSoS_8_meoZC/view?usp=drive_link',
      alt: 'CISCO Network Defense logo',
    },
    {
      title: 'Introduction to Docker: Technology and Its Application',
      date: 'May 2026',
      logo: 'assets/certifications-logo/docker-logo.jpg',
      link: 'https://drive.google.com/file/d/1qTePPlOcQT9X6M-45ic9NNlAGCZEFn-g/view?usp=drive_link',
      alt: 'Docker logo',
    },
    {
      title: 'From Interface to Impact: UI/UX in the Corporate World',
      date: 'April 2026',
      logo: 'assets/certifications-logo/ui-ux-logo.png',
      link: 'https://drive.google.com/file/d/1M_-5Qnflstll56ONbAWSsV7UYPFsl2jl/view?usp=drive_link',
      alt: 'UI/UX logo',
    },
    {
      title: 'From System Failures to Career Futures: A Seminar on IT Realities',
      date: 'March 2026',
      logo: 'assets/certifications-logo/system-failures-logo.jpg',
      link: 'https://drive.google.com/file/d/1_25CfUeWxbQw1V8pSI5IUcVt1FmGzh44/view?usp=drive_link',
      alt: 'System Failures Seminar logo',
    },
    {
      title: 'Launchpad: Building Your Tech Career Foundation',
      date: '2026',
      logo: 'assets/certifications-logo/launchpad-logo.jpg',
      link: 'https://drive.google.com/file/d/1RHpCeWkokqrDHuxxw2leXQ5CPnt97GnF/view?usp=drive_link',
      alt: 'Launchpad logo',
    },
  ];
}
