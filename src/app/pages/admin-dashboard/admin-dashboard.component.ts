import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../../pages/shared/services/employee-data.service';
import { CommonModule } from '@angular/common';
import { EmployeeTableComponent } from '../shared/employee-table/employee-table.component';



@Component({
  selector: 'app-admin-dashboard',
   standalone: true,
  imports: [CommonModule, EmployeeTableComponent],
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {
  employees: any[] = [];

  constructor(private empService: EmployeeDataService) {}

  ngOnInit(): void {
    this.empService.getList().subscribe(data => this.employees = data);
  }

  // handleEdit(emp: any) {
  //   console.log('Edit from Admin:', emp);
  // }

  handleDelete(id: number) {
    this.empService.deleteEmployee(id);
  }
}
