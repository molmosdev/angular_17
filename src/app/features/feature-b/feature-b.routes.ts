import { Routes } from '@angular/router';
import { ViewBARoutes } from './views/view-b-a/view-b-a.routes';

export const FeatureBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-a',
    loadComponent: () => import('./views/view-b-a/view-b-a.component').then((x) => x.ViewBAComponent),
    children: ViewBARoutes
  },
  {
    path: 'view-b-b',
    loadComponent: () => import('./views/view-b-b/view-b-b.component').then((x) => x.ViewBBComponent)
  }
];