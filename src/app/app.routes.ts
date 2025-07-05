import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { EmpcurdComponent } from './pages/empcurd/empcurd.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HrDashboardComponent } from './pages/hr-dashboard/hr-dashboard.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AuthGuard } from './auth.guard';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    
    children: [
      {
        path: 'employees',
        component: EmployeesComponent,
      },
      {
        path: 'empcurd',
        component: EmpcurdComponent,
      },
       {
        path: 'admin-login',
        component: AdminLoginComponent,
      },

      {
        path: 'admin-dashboard',
        canActivate: [AuthGuard], // Auth Gard use this 
        component: AdminDashboardComponent,
      },
      {
        path: 'hr-dashboard', 
        component: HrDashboardComponent,
      },
      {
        path: 'employee-list', 
        component: EmployeeListComponent,
      },
    ],
  },
];
