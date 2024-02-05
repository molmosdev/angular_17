import { Routes } from '@angular/router';

export const PageBCRoutes: Routes = [
  {
    path: '',
    redirectTo: 'page-b-c-a',
    pathMatch: 'full'
  },
  {
    path: 'page-b-c-a',
    loadComponent: () => import('./pages/page-b-c-a/page-b-c-a.component').then((x) => x.PageBCAComponent)
  },
  {
    path: 'page-b-c-b',
    loadComponent: () => import('./pages/page-b-c-b/page-b-c-b.component').then((x) => x.PageBCBComponent)
  }
];