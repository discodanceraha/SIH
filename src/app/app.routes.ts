import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'attendance',
    loadComponent: () => import('./attendance/attendance.page').then( m => m.AttendancePage)
  },
  {
    path: 'pending',
    loadComponent: () => import('./pending/pending.page').then( m => m.PendingPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'add-subject',
    loadComponent: () => import('./add-subject/add-subject.page').then( m => m.AddSubjectPage)
  },
];
