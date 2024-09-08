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
  logos: string[] = [
    '/assets/icons-skills/angular.svg',
    '/assets/icons-skills/css.svg',
    '/assets/icons-skills/Github_light.svg',
    '/assets/icons-skills/gitlab.svg',
    '/assets/icons-skills/html5.svg',
    '/assets/icons-skills/javascript.svg',
    '/assets/icons-skills/mongodb.svg',
    '/assets/icons-skills/mysql.svg',
    '/assets/icons-skills/PrimeFlexLogo.svg',
    '/assets/icons-skills/typescript.svg',
  ];
}
