import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  standalone: true, // ✅ Required for standalone components
  imports: [CommonModule], // ✅ only CommonModule needed
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'] // ✅ must be 'styleUrls', not 'styleUrl'
})
export class DashbordComponent {
  showDropdown = false;
  activeTab: 'region' | 'transportation' | 'accommodation' | 'interests' = 'region';

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  setActiveTab(tab: 'region' | 'transportation' | 'accommodation' | 'interests') {
    this.activeTab = tab;
  }

  regionList = [
    { name: "I'm Flexible", image: 'assets/maps/all.png' },
    { name: 'Up Country', image: 'assets/maps/upcountry.png' },
    { name: 'North & East', image: 'assets/maps/north-east.png' },
    { name: 'South Coast', image: 'assets/maps/south-coast.png' },
    { name: 'East Coast', image: 'assets/maps/east-coast.png' }
  ];
}
