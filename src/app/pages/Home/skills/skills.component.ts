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
  skills = [
    { value: 70, logo: '/assets/img/angular.svg' },
    { value: 80, logo: '/assets/img/typescript.svg' },
    { value: 60, logo: '/assets/img/logo3.svg' },
    { value: 90, logo: '/assets/img/logo4.svg' },
  ];

  skills2 = [
    { value: 75, logo: '/assets/img/logo5.svg' },
    { value: 85, logo: '/assets/img/logo6.svg' },
    { value: 65, logo: '/assets/img/logo7.svg' },
    { value: 95, logo: '/assets/img/logo8.svg' },
  ];
}
