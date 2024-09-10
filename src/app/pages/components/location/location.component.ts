import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  location: any;
  previousLocation: any;
  private apiUrl = 'http://ip-api.com/json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.previousLocation = JSON.parse(
      localStorage.getItem('lastLocation') || 'null'
    );

    this.getLocation();
  }

  getLocation(): void {
    this.http.get(this.apiUrl).subscribe((data) => {
      localStorage.setItem('lastLocation', JSON.stringify(data));

      this.location = data;
    });
  }
}
