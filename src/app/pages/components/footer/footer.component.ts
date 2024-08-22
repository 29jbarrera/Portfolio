import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  gitHubUrl = 'https://github.com/29jbarrera';
  gitLabUrl = 'https://gitlab.com/29jbarrera';
  linkedinUrl = 'https://www.linkedin.com/in/javier-barrera-lopez/';
}
