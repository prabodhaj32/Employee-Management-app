import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-layout',
  standalone:true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, MatIconModule,MatButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
    constructor(private router: Router) {}

  logout() {
    
    //  localStorage.clear();

  this.router.navigate(['/login']);
  
  }

}
