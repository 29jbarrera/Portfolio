import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

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
  ],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  private originalBackgroundColor: string | undefined;
  private originalBorderColor: string | undefined;
  private originalLinkColor: string = '';
  private originalTitleColor: string = '';

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.addScrollListener();
  }

  private addScrollListener() {
    const navBackground =
      this.elRef.nativeElement.querySelector('.nav-background');
    const linksNav = this.elRef.nativeElement.querySelectorAll('.links-nav');
    const titleElement = this.elRef.nativeElement.querySelector('.title');

    if (navBackground) {
      this.originalBackgroundColor =
        window.getComputedStyle(navBackground).backgroundColor;

      this.originalBorderColor =
        window.getComputedStyle(navBackground).borderBottomColor;
    }

    if (linksNav.length > 0) {
      this.originalLinkColor = window.getComputedStyle(linksNav[0]).color;
    }

    if (titleElement) {
      this.originalTitleColor = window.getComputedStyle(titleElement).color;
    }

    window.addEventListener('scroll', () => {
      if (navBackground) {
        const scrollTop = window.scrollY;

        if (scrollTop > 0) {
          navBackground.style.backgroundColor = `rgba(255, 255, 255, 0.3)`;
          navBackground.style.borderBottomColor = `rgba(243, 192, 104, 0.3)`;

          linksNav.forEach((link: HTMLElement) => {
            link.style.color = `rgba(0, 34, 66, 1)`;
          });

          if (titleElement) {
            titleElement.style.color = `rgba(0, 34, 66, 1)`;
          }
        } else {
          navBackground.style.backgroundColor = this.originalBackgroundColor;
          navBackground.style.borderBottomColor = this.originalBorderColor;

          linksNav.forEach((link: HTMLElement) => {
            link.style.color = this.originalLinkColor;
          });

          if (titleElement) {
            titleElement.style.color = this.originalTitleColor;
          }
        }
      }

      const scrollToTopBtn =
        this.elRef.nativeElement.querySelector('.scroll-to-top');
      if (scrollToTopBtn) {
        if (window.scrollY > 300) {
          scrollToTopBtn.classList.add('visible');
        } else {
          scrollToTopBtn.classList.remove('visible');
        }
      }
    });
  }

  public scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
