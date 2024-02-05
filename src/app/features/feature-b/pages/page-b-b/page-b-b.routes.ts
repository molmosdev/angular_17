import { Routes } from '@angular/router';

export const PageBBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'page-b-b-a',
    pathMatch: 'full'
  },
  {
    path: 'page-b-b-a',
    loadComponent: () => import('./pages/page-b-b-a/page-b-b-a.component').then((x) => x.PageBBAComponent)
  },
  {
    path: 'page-b-b-b',
    loadComponent: () => import('./pages/page-b-b-b/page-b-b-b.component').then((x) => x.PageBBBComponent)
  }
];