import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContentComponent, SkillsComponent,FooterComponent, MenuComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {}
