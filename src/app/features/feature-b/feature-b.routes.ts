import { Routes } from '@angular/router';
import { ViewBCRoutes } from './view-b-c/view-b-c.routes';
import { ViewBBRoutes } from './view-b-b/view-b-b.routes';

export const FeatureBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-a',
    loadComponent: () => import('./view-b-a/view-b-a.component')
  },
  {
    path: 'view-b-b',
    children: ViewBBRoutes
  },
  {
    path: 'view-b-c',
    loadComponent: () => import('./view-b-c/view-b-c.component'),
    children: ViewBCRoutes
  }
];
