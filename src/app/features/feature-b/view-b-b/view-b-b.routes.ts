import { Routes } from '@angular/router';

export const ViewBBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-b-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-b-a',
    loadComponent: () => import('./view-b-b-a/view-b-b-a.component')
  },
  {
    path: 'view-b-b-b',
    loadComponent: () => import('./view-b-b-b/view-b-b-b.component')
  }
];
