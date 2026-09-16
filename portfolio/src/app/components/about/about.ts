import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  imageX = 0;
  imageY = 0;

  @HostListener('document:mousemove', ['$event'])
  onPointerMove(event: MouseEvent): void {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    this.imageX = x * 12;
    this.imageY = y * 12;
  }

  @HostListener('document:mouseleave')
  onPointerLeave(): void {
    this.imageX = 0;
    this.imageY = 0;
  }

}
