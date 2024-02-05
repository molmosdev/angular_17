import { Routes } from '@angular/router';
import { PageBCRoutes } from './pages/page-b-c/page-b-c.routes';
import { PageBBRoutes } from './pages/page-b-b/page-b-b.routes';

export const FeatureBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'page-b-a',
    pathMatch: 'full'
  },
  {
    path: 'page-b-a',
    loadComponent: () => import('./pages/page-b-a/page-b-a.component').then((x) => x.PageBAComponent)
  },
  {
    path: 'page-b-b',
    children: PageBBRoutes
  },
  {
    path: 'page-b-c',
    loadComponent: () => import('./pages/page-b-c/page-b-c.component').then((x) => x.PageBCComponent),
    children: PageBCRoutes
  }
];