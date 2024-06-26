import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';




@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.scss'
})
export class ProjectsPage {}
