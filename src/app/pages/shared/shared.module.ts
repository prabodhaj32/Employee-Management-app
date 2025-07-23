import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { UserRegistrationComponent } from '../shared/user-registration/user-registration.component';
import { UserSettingsComponent } from '../shared/user-settings/user-settings.component';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    EmployeeTableComponent, // ✅ Imported because it's standalone
    UserRegistrationComponent,//dropdown
    UserSettingsComponent //dropdown
    
  ],
  exports: [
    EmployeeTableComponent,
    UserRegistrationComponent,
    UserSettingsComponent
    
  ]
})
export class SharedModule {}
