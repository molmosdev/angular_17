import { Routes } from '@angular/router';

export const FeatureCRoutes: Routes = [
  {
    path: '',
    redirectTo: 'page-c-a',
    pathMatch: 'full'
  },
  {
    path: 'page-c-a',
    loadComponent: () => import('./page-c-a/page-c-a.component')
  },
  {
    path: 'page-c-b',
    loadComponent: () => import('./page-c-b/page-c-b.component')
  }
];
