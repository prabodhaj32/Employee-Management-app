import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {RouterOutlet } from '@angular/router';
import { EmpcurdComponent } from './pages/empcurd/empcurd.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


    
  }
  



