import { Routes } from '@angular/router';

export const ViewBBRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view-b-b-a',
    pathMatch: 'full'
  },
  {
    path: 'view-b-b-a',
    loadComponent: () => import('./views/view-b-b-a/view-b-b-a.component').then((x) => x.ViewBBAComponent)
  },
  {
    path: 'view-b-b-b',
    loadComponent: () => import('./views/view-b-b-b/view-b-b-b.component').then((x) => x.ViewBBBComponent)
  }
];