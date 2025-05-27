import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule],  // <-- add RouterModule and NavbarComponent here
  templateUrl: './app.component.html',
})
export class AppComponent {}

