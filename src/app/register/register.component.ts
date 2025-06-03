import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // For *ngIf
import { FormsModule } from '@angular/forms';    // For [(ngModel)]
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,      // Add this if you want this component standalone
  imports: [CommonModule, FormsModule]  // Import the necessary modules here
})
export class RegisterComponent {
  email = '';
  password = '';
  password_confirmation = '';
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.password !== this.password_confirmation) {
      this.errorMessage = "Passwords do not match.";
      this.successMessage = '';
      return;
    }

    const payload = {
      user: {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }
    };

    this.http.post<any>('/api/signup', payload).subscribe({
      next: (response) => {
        this.successMessage = 'Registration successful! You can now login.';
        this.errorMessage = '';
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';
      }
    });
  }
}
