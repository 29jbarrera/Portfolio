import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, DividerModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {}
