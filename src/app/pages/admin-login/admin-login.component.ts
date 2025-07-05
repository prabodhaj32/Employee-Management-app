import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  imports : [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('adminToken', 'loggedin');
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert('Login Failed');
    }
  }
}
