import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LocationComponent } from '../../components/location/location.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule,
    ButtonModule,
    ToastModule,
    LocationComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  providers: [MessageService],
})
export class ContentComponent {
  constructor(private messageService: MessageService) {}

  downloadPDF() {
    const pdfUrl = '/assets/file/CV_Javier_Barrera_López.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_JBL.pdf';
    link.click();

    this.messageService.add({
      severity: 'success',
      summary: 'Descarga exitosa',
      detail: 'CV descargado exitosamente',
    });
  }
}
