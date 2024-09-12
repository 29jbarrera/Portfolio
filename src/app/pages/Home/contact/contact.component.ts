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
import { environment } from '../../../../environments/enviroments';

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
  messages: Message[] = [];
  loading: boolean = false;

  reCaptchaSiteKey = environment.RECAPTCHA_SITE_KEY;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
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

    this.error_control_form();

    if (this.contactForm.invalid || !this.captchaVerified) {
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
      .post(`${environment.apiUrl}/send-email`, formData, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          this.messages = [];
          this.messages.push({
            severity: 'success',
            summary: 'Success',
            detail: 'Message sent successfully.',
          });
          this.captchaVerified = false;
          this.contactForm.reset();
          this.loading = false;
        },
        (error) => {
          this.loading = true;
          this.messages = [];
          this.messages.push({
            severity: 'error',
            summary: 'Error',
            detail: 'Something unexpected happened.',
          });

          this.loading = false;
          this.cd.detectChanges();
        }
      );
  }

  error_control_form() {
    if (this.contactForm.invalid) {
      this.showErrorMessages();
      return;
    }

    if (!this.captchaVerified) {
      this.showErrorCaptchaMessage();
      return;
    }
  }

  private showErrorMessages() {
    const emailErrorMessage =
      'The email address is invalid. Please enter a valid email address.';
    const nameErrorMessage =
      'Name must be at least 3 characters long. Please provide a valid name.';
    const requiredErrorMessage =
      'All form fields are required. Please complete all fields.';

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
          detail: emailErrorMessage,
        });
      } else if (emailControl.errors?.['required']) {
        this.messages.push({
          severity: 'error',
          summary: 'Error',
          detail: requiredErrorMessage,
        });
      }
    }

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
          detail: nameErrorMessage,
        });
      } else if (nameControl.errors?.['required']) {
        this.messages.push({
          severity: 'error',
          summary: 'Error',
          detail: requiredErrorMessage,
        });
      }
    }

    if (this.messages.length === 0) {
      this.messages.push({
        severity: 'error',
        summary: 'Error',
        detail: requiredErrorMessage,
      });
    }

    this.cd.detectChanges();
    this.loading = false;
  }

  private showErrorCaptchaMessage() {
    const captchaErrorMessage =
      'CAPTCHA verification is missing. Please complete the verification.';
    this.messages.push({
      severity: 'error',
      summary: 'Error',
      detail: captchaErrorMessage,
    });
    this.cd.detectChanges();
    this.loading = false;
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
