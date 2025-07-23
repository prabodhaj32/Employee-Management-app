import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TESTComponent {
  showDropdown = false;
  activeTab: string = 'region';

  @Output() onToggleChange = new EventEmitter<boolean>();

  regions = [
    {
      id: 'region-im-flexible',
      value: 'Im Flexible',
      label: 'Im Flexible',
      img: './images/region-1.jpg'
    },
    {
      id: 'region-up-country',
      value: 'Up Country',
      label: 'Up Country',
      img: './images/region-2.jpg'
    },
    {
      id: 'region-north-east',
      value: 'North & East',
      label: 'North & East',
      img: './images/region-3.jpg'
    },
    {
      id: 'region-south-coast',
      value: 'South Coast',
      label: 'South Coast',
      img: './images/region-4.jpg'
    },
    {
      id: 'region-east-coast',
      value: 'East Coast',
      label: 'East Coast',
      img: './images/region-5.jpg'
    }
  ];

  constructor(private router: Router) {}

  openDropdown() {
    this.showDropdown = true;
  }

  closeDropdown() {
    this.showDropdown = false;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
