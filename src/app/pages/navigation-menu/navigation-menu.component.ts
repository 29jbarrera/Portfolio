import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from '../components/menu/menu-item.type';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RippleModule,
    StyleClassModule,
    ButtonModule,
    MenuModule,
    MenuComponent,
  ],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  public menu_items: MenuItem[] = [];
  public deployed_menu: boolean = true;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.menu_items = [
      {
        label: 'Home',
        icon: 'assets/icons/.png',
        routerLink: '/portfolio/home',
        action: 'home',
      },
      {
        label: 'Projects',
        icon: 'assets/icons/.png',
        routerLink: '/portfolio/projects',
        action: 'projects',
      },
    ];

    const width: number = window.innerWidth;

    if (width < 1129) {
      this.handleMenu();
    }
  }

  go_to(path: string) {
    this._router.navigate(['portfolio', ...path.split('/')]);
  }

  handleMenu() {
    const menu = document.getElementById('app-sidebar');

    if (!menu) {
      return;
    }

    this.deployed_menu = !this.deployed_menu;
    menu.classList.toggle('hidden', !this.deployed_menu);
  }
}
