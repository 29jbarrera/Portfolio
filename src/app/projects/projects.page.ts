import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FooterComponent, MenuComponent],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.scss'
})
export class ProjectsPage {}
