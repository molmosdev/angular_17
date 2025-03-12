import { Routes } from '@angular/router';

export const ViewBCRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-c-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-c-a',
    loadComponent: () => import('./view-b-c-a/view-b-c-a.component')
  },
  {
    path: 'view-b-c-b',
    loadComponent: () => import('./view-b-c-b/view-b-c-b.component')
  }
];
