import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../../pages/shared/services/employee-data.service';
import { EmployeeModel } from '../../pages/employee';
import { CommonModule } from '@angular/common';
import { EmployeeTableComponent } from '../shared/employee-table/employee-table.component';


@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [CommonModule, EmployeeTableComponent],
  templateUrl: './hr-dashboard.component.html'
})
export class HrDashboardComponent implements OnInit {
  employees: EmployeeModel[] = [];

  constructor(private empService: EmployeeDataService) {}

  ngOnInit(): void {
    this.empService.getList().subscribe(data => this.employees = data);
  }

  handleEdit(emp: EmployeeModel) {
    console.log('Edit from HR:', emp);
    // Forward this data to form or modal
  }

  handleDelete(id: number) {
    this.empService.deleteEmployee(id);
  }

  trackByEmpId(index: number, item: EmployeeModel) {
    return item.empId;
  }
}
