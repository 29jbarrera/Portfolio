import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-page-found',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './NotPageFound.page.html',
  styleUrl: './NotPageFound.page.scss',
})
export class NotPageFoundPage {}
