import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from './menu-item.type';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonModule,
    StyleClassModule,
    RippleModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() item!: MenuItem;
  @Output() go_to: EventEmitter<string> = new EventEmitter<string>();

  public is_deployed: boolean = false;

  constructor(private _router: Router) {}

  deploy_menu() {
    this.is_deployed = !this.is_deployed;
  }

  checkRoute(item: MenuItem) {
    return item.routerLink === this._router.url;
  }
}
