import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service'; // ✅ Import AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  onSubmit() {
    const payload = {
      user: {
        email: this.email,
        password: this.password
      },
      session: {
        user: {
          email: this.email,
          password: this.password
        }
      }
    };

    this.http.post<any>('/login', payload).subscribe({
      next: (response) => {
        console.log('Login response:', response);
        this.authService.setToken(response.token); // ✅ Store token using service
        this.router.navigate(['/products']);
      },
      error: () => {
        this.errorMessage = 'Login failed. Check credentials.';
      }
    });
  }
}
