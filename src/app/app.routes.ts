import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { EmpcurdComponent } from './pages/empcurd/empcurd.component';

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
        path: 'dashbord',
        component: DashbordComponent,
      },
      {
        path: 'empcurd',
        component: EmpcurdComponent,
      },
    ],
  },
];
// import { Routes } from '@angular/router';
// import { LoginComponent } from './pages/login/login.component';
// import { LayoutComponent } from './pages/layout/layout.component';
// import { DashbordComponent } from './pages/dashbord/dashbord.component';
// import { EmpcurdComponent } from './pages/empcurd/empcurd.component';

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full',
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'layout',
//     component: LayoutComponent
//   },
//   {
//     path: 'dashboard',
//     component: DashbordComponent
//   },
//   {
//     path: 'empcurd',
//     component: EmpcurdComponent
//   },
  
// ];

