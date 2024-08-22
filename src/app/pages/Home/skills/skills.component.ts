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
    { value: 90, logo: '/assets/img/html5.svg' },
    { value: 90, logo: '/assets/img/css.svg' },
    { value: 80, logo: '/assets/img/javascript.svg' },
    { value: 80, logo: '/assets/img/typescript.svg' },
    { value: 95, logo: '/assets/img/vscode.svg' },
  ];

  skills2 = [
    { value: 80, logo: '/assets/img/angular.svg' },
    { value: 60, logo: '/assets/img/react.svg' },
    { value: 60, logo: '/assets/img/nodejs.svg' },
    { value: 80, logo: '/assets/img/mongodb.svg' },
    { value: 90, logo: '/assets/img/git.svg' },
  ];
}
