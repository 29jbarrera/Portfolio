import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-proyect',
  standalone: true,
  imports: [CommonModule, GalleriaModule, ButtonModule],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.scss',
})
export class ProyectComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() role: string = '';
  @Input() tecnologies: string = '';
  @Input() imageUrl: string[] = [];
  @Input() link: string = '';
  @Input() reverse: boolean = false;

  isLinkActive: boolean = true;

  currentIndex: number = 0;

  ngOnInit() {
    this.isLinkActive = this.link ? true : false;

    if (this.imageUrl.length === 0) {
      console.warn('No images provided!');
    }
  }

  showPrevious() {
    if (this.imageUrl.length > 0) {
      this.currentIndex =
        (this.currentIndex - 1 + this.imageUrl.length) % this.imageUrl.length;
    }
  }

  showNext() {
    if (this.imageUrl.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrl.length;
    }
  }

  getCurrentImageUrl(): string {
    return this.imageUrl[this.currentIndex];
  }
}
