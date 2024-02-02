import { Routes } from '@angular/router';
import { ViewBBRoutes } from './views/view-b-b/view-b-b.routes';
import { ViewBCRoutes } from './views/view-b-c/view-b-c.routes';

export const FeatureBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-a',
    loadComponent: () => import('./views/view-b-a/view-b-a.component').then((x) => x.ViewBAComponent)
  },
  {
    path: 'view-b-b',
    children: ViewBBRoutes
  },
  {
    path: 'view-b-c',
    loadComponent: () => import('./views/view-b-c/view-b-c.component').then((x) => x.ViewBCComponent),
    children: ViewBCRoutes
  }
];