import { Routes } from '@angular/router';
import { PageBCRoutes } from './page-b-c/page-b-c.routes';
import { PageBBRoutes } from './page-b-b/page-b-b.routes';

export const FeatureBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'page-b-a',
    pathMatch: 'full'
  },
  {
    path: 'page-b-a',
    loadComponent: () => import('./page-b-a/page-b-a.component')
  },
  {
    path: 'page-b-b',
    children: PageBBRoutes
  },
  {
    path: 'page-b-c',
    loadComponent: () => import('./page-b-c/page-b-c.component'),
    children: PageBCRoutes
  }
];
