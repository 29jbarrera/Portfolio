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
    { logo: '/assets/img/html5.svg' },
    { logo: '/assets/img/css.svg' },
    { logo: '/assets/img/javascript.svg' },
    { logo: '/assets/img/typescript.svg' },
    { logo: '/assets/img/vscode.svg' },
    { logo: '/assets/img/angular.svg' },
    { logo: '/assets/img/react.svg' },
    { logo: '/assets/img/nodejs.svg' },
    { logo: '/assets/img/mongodb.svg' },
    { logo: '/assets/img/git.svg' },
  ];

  skills2 = [
    { logo: '/assets/img/angular.svg' },
    { logo: '/assets/img/react.svg' },
    { logo: '/assets/img/nodejs.svg' },
    { logo: '/assets/img/mongodb.svg' },
    { logo: '/assets/img/git.svg' },
  ];
}
