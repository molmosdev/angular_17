import { Routes } from '@angular/router';
import { FeatureBRoutes } from './features/feature-b/feature-b.routes';
import { FeatureCRoutes } from './features/feature-c/feature-c.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'feature-a',
    pathMatch: 'full'
  },
  {
    path: 'feature-a',
    loadComponent: () => import('./features/feature-a/feature-a.component').then((x) => x.FeatureAComponent),
  },
  {
    path: 'feature-b',
    children: FeatureBRoutes
  },
  {
    path: 'feature-c',
    loadComponent: () => import('./features/feature-c/feature-c.component').then((x) => x.FeatureCComponent),
    children: FeatureCRoutes
  }
];

