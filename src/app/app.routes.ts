import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { EmpcurdComponent } from './pages/empcurd/empcurd.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HrDashboardComponent } from './pages/hr-dashboard/hr-dashboard.component';

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
        path: 'admin-dashboard', 
        component: AdminDashboardComponent,
      },
      {
        path: 'hr-dashboard', 
        component: HrDashboardComponent,
      },
    ],
  },
];
