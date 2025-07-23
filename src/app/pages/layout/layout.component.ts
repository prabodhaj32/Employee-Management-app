import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone:true,
  imports: [CommonModule,SharedModule,RouterOutlet,RouterLink,RouterLinkActive, MatIconModule,MatButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
    dropdownOpen = false;//dropdown
    registrationModalOpen = false;//dropdown
    settingsModalOpen = false;//dropdown

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  constructor(private router: Router) {}

  logout() {
    
    //  localStorage.clear();

  this.router.navigate(['/login']);
  }
  
      //dropdown----------------------

  // openRegistrationModal() {
  //   this.registrationModalOpen = true;
  //   this.dropdownOpen = false; // close dropdown
  // }

  // closeRegistrationModal() {
  //   this.registrationModalOpen = false;
  // }

   openSettingsModal() {
    this.settingsModalOpen = true;
    this.dropdownOpen = false;
  }

  closeSettingsModal() {
    this.settingsModalOpen = false;
  }
  
  }
  


