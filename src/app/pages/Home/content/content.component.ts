import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { LocationComponent } from '../../components/location/location.component';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule,
    ButtonModule,
    MessagesModule,
    LocationComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  constructor() {}

  downloadPDF() {
    const confirmDownload = confirm('Are you sure you want to download my CV?');

    if (confirmDownload) {
      const pdfUrl = '/assets/file/CV_Javier_Barrera_López.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'CV_JavierBL.pdf';
      link.click();
    } else {
      return;
    }
  }
}
