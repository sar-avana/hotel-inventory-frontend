import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';  // import Router & RouterModule
import { AuthService } from '../auth/auth.service';      // import your AuthService (adjust path)

@Component({
  selector: 'app-navbar',
  standalone: true,                     // <-- must be standalone
  imports: [CommonModule, RouterModule],  // <-- import modules used in template
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
