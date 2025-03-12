import { Routes } from '@angular/router';

export const FeatureCRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-c-a',
    pathMatch: 'full'
  },
  {
    path: 'view-c-a',
    loadComponent: () => import('./view-c-a/view-c-a.component')
  },
  {
    path: 'view-c-b',
    loadComponent: () => import('./view-c-b/view-c-b.component')
  }
];
