import { ChangeDetectorRef, Component } from '@angular/core';
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
import { RecaptchaModule } from 'ng-recaptcha';
import { Message, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    RecaptchaModule,
    MessagesModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [MessageService],
})
export class ContactComponent {
  contactForm: FormGroup;
  captchaVerified: boolean = false;
  messages: Message[] = []; // Inicializa como un array vacío
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService,
    private cd: ChangeDetectorRef
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(5000)]],
    });
  }

  onSubmit() {
    this.messages = [];

    // Verifica si el formulario es inválido
    if (this.contactForm.invalid) {
      // Verifica si el campo de correo electrónico es inválido
      const emailControl = this.contactForm.get('email');
      if (
        emailControl &&
        emailControl.invalid &&
        (emailControl.dirty || emailControl.touched)
      ) {
        if (emailControl.errors?.['email']) {
          this.messages.push({
            severity: 'error',
            summary: 'Error',
            detail:
              'The email address is invalid. Please enter a valid email address.',
          });
        } else if (emailControl.errors?.['required']) {
          this.messages.push({
            severity: 'error',
            summary: 'Error',
            detail: 'Email field is required. Please provide an email address.',
          });
        }
      }

      // Verifica si el campo del nombre es inválido
      const nameControl = this.contactForm.get('name');
      if (
        nameControl &&
        nameControl.invalid &&
        (nameControl.dirty || nameControl.touched)
      ) {
        if (nameControl.errors?.['minlength']) {
          this.messages.push({
            severity: 'error',
            summary: 'Error',
            detail:
              'Name must be at least 3 characters long. Please provide a valid name.',
          });
        } else if (nameControl.errors?.['required']) {
          this.messages.push({
            severity: 'error',
            summary: 'Error',
            detail: 'Name field is required. Please provide your name.',
          });
        }
      }

      // Muestra un mensaje genérico si el formulario tiene otros errores
      if (this.messages.length === 0) {
        this.messages.push({
          severity: 'error',
          summary: 'Error',
          detail: 'All form fields are required. Please complete all fields.',
        });
      }

      this.cd.detectChanges();
      this.loading = false;
      return;
    }

    // Verifica si el CAPTCHA está verificado
    if (!this.captchaVerified) {
      this.messages.push({
        severity: 'error',
        summary: 'Error',
        detail:
          'CAPTCHA verification is missing. Please complete the verification.',
      });
      this.cd.detectChanges();
      this.loading = false;
      return;
    }
    this.loading = true;

    const formData = this.contactForm.value;

    this.messages.push({
      severity: 'success',
      summary: 'Success',
      detail: 'Message sent successfully.',
    });

    this.http
      .post('http://localhost:3000/send-email', formData, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          this.captchaVerified = false;
          this.contactForm.reset();
          this.loading = false;
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error sending the message.',
          });
          console.error('Error sending message:', error);
        }
      );
  }

  handleSuccess(token: string | null): void {
    if (token) {
      this.captchaVerified = true;
    } else {
      this.captchaVerified = false;
    }
  }

  handleError(): void {
    this.captchaVerified = false;
  }
}
