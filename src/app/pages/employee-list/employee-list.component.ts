import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee-list/employee.model';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatSortModule], 
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar'];
  dataSource: Employee[] = [];//data shown in the table


  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.dataSource = data;
    });
  }
}
