import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent,
    SkillsComponent,
    FooterComponent,
    ContactComponent,
    EducationComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {}
