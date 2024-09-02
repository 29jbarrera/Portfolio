import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-proyect',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.scss',
})
export class ProyectComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() link: string = '';
  @Input() reverse: boolean = false;
}
