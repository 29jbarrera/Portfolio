import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ProgressBarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillsValues = [20, 40, 60, 80]; // Valores para la primera columna
  skillsValues2 = [25, 50, 75, 100];
}
