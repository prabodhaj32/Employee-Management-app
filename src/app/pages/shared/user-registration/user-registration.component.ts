import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
user = {
    name: '',
    email: ''
    // Add other fields as needed
  };

  onSubmit() {
    if (this.user.name && this.user.email) {
      console.log('User Registered:', this.user);
      alert('Registration successful!');
      // Optional: Reset form or redirect
    }
  }
}
