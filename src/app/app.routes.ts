import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './auth/auth.guard'; // ✅ Import the guard
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },  // <-- register route added
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard] // ✅ Protect this route
  }
];



