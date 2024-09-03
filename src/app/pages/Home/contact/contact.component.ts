import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // TODO añadirle mensajes de alertas de primeNG
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.http.post('http://localhost:3000/send-email', formData).subscribe(
        (response) => {
          console.log('Correo enviado correctamente', response);
          alert('Correo enviado correctamente');
          this.contactForm.reset(); // Opcional: Limpiar el formulario después de enviar
        },
        (error) => {
          console.error('Error al enviar el correo', error);
          alert('Error al enviar el correo');
        }
      );
    } else {
      console.log('Formulario no válido');
      alert('Por favor, complete el formulario correctamente.');
    }
  }
}
