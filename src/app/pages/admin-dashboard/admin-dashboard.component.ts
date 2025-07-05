import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../../pages/shared/services/employee-data.service';
import { CommonModule } from '@angular/common';
import { EmployeeTableComponent } from '../shared/employee-table/employee-table.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
   standalone: true,
  imports: [CommonModule, EmployeeTableComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']

})
export class AdminDashboardComponent implements OnInit {
  employees: any[] = [];

 constructor(
    private router: Router,
    private empService: EmployeeDataService
  ) {}
  ngOnInit(): void {
    this.empService.getList().subscribe(data => this.employees = data);
  }

  

  handleDelete(id: number) {
    this.empService.deleteEmployee(id);
  }
  logout() {
    localStorage.removeItem('adminToken');
    this.router.navigate(['/admin-login']); 
  }
}
