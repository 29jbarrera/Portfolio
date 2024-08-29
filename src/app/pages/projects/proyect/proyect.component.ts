import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.scss',
})
export class ProyectComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() reverse: boolean = false;
}
