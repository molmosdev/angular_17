import { Routes } from '@angular/router';

export const PageBBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'page-b-b-a',
    pathMatch: 'full'
  },
  {
    path: 'page-b-b-a',
    loadComponent: () => import('./page-b-b-a/page-b-b-a.component')
  },
  {
    path: 'page-b-b-b',
    loadComponent: () => import('./page-b-b-b/page-b-b-b.component')
  }
];
