import { Routes } from '@angular/router';

export const FeatureCRoutes: Routes = [
  {
    path: '',
    redirectTo: 'page-c-a',
    pathMatch: 'full'
  },
  {
    path: 'page-c-a',
    loadComponent: () => import('./pages/page-c-a/page-c-a.component').then((x) => x.PageCAComponent)
  },
  {
    path: 'page-c-b',
    loadComponent: () => import('./pages/page-c-b/page-c-b.component').then((x) => x.PageCBComponent)
  }
];