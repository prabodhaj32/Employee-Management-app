import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  @Input() visible = false;//dropdown
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
  settings = {
    language: '',
    currency: 'LKR',
    notification: {
      email: true,
      sms: false,
    
    }
  };
 
  


   onSubmit() {
    console.log('✅ Saved settings:', this.settings);
    this.close();
  }
  }


