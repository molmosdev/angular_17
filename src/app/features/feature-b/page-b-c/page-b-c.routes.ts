import { Routes } from '@angular/router';

export const PageBCRoutes: Routes = [
  {
    path: '',
    redirectTo: 'page-b-c-a',
    pathMatch: 'full'
  },
  {
    path: 'page-b-c-a',
    loadComponent: () => import('./page-b-c-a/page-b-c-a.component')
  },
  {
    path: 'page-b-c-b',
    loadComponent: () => import('./page-b-c-b/page-b-c-b.component')
  }
];
