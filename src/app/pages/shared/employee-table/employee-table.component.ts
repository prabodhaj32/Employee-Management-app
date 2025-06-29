import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';




@Component({
  standalone: true,
   imports: [CommonModule, MatTableModule, MatButtonModule],
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  //styleUrls: ['./employee-table.component.css']


})
export class EmployeeTableComponent implements OnChanges {
  @Input() employeeList: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['index', 'name', 'contactNo', 'city', 'address', 'actions'];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employeeList']) {
      this.dataSource.data = this.employeeList;
    }
  }

  onEdit(item: any) {
    this.edit.emit(item);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }
}
