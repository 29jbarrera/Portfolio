import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  location: any; // Ubicación actual
  previousLocation: any; // Ubicación anterior
  private apiUrl = 'http://ip-api.com/json'; // URL de la API
  private displayDelay = 3000; // 3 segundos

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(): void {
    this.http.get(this.apiUrl).subscribe(
      (data) => {
        if (this.location) {
          // Guarda la ubicación actual en `previousLocation`
          this.previousLocation = this.location;
          // Forzar la visualización de `previousLocation` antes de actualizarla
          setTimeout(() => {
            this.previousLocation = null; // Oculta la ubicación anterior
          }, this.displayDelay);
        }

        this.location = data;

        console.log('Ubicación obtenida:', data); // Muestra la respuesta en consola
        console.log('Ubicación actual:', this.location);
      },
      (error) => {
        console.error('Error al obtener la ubicación:', error);
      }
    );
  }
}
