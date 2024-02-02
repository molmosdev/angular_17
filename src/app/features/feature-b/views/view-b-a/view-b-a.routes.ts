import { Routes } from '@angular/router';

export const ViewBARoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-a-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-a-a',
    loadComponent: () => import('./views/view-b-a-a/view-b-a-a.component').then((x) => x.ViewBAAComponent)
  },
  {
    path: 'view-b-a-b',
    loadComponent: () => import('./views/view-b-a-b/view-b-a-b.component').then((x) => x.ViewBABComponent)
  },
];