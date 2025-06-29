import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { EmployeeTableComponent } from './employee-table/employee-table.component';

@NgModule({
  declarations: [EmployeeTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [EmployeeTableComponent]
})
export class SharedModule {}
