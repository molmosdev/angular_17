import { Routes } from '@angular/router';

export const FeatureCRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-c-a',
    pathMatch: 'full'
  },
  {
    path: 'view-c-a',
    loadComponent: () => import('./views/view-c-a/view-c-a.component').then((x) => x.ViewCAComponent)
  },
  {
    path: 'view-c-b',
    loadComponent: () => import('./views/view-c-b/view-c-b.component').then((x) => x.ViewCBComponent)
  }
];