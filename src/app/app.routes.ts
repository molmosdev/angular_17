import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then((x) => x.HomeComponent),
    children: [
      {
        path: '',
        redirectTo: 'data',
        pathMatch: 'full'
      },
      {
        path: 'data',
        loadComponent: () => import('./features/home/pages/data/data.component').then((x) => x.DataComponent)
      },
      {
        path: 'user',
        loadComponent: () => import('./features/home/pages/user/user.component').then((x) => x.UserComponent)
      }
    ]
  },
  {
    path: 'info',
    children: [
      {
        path: 'about',
        loadComponent: () => import('./features/info/about/about.component').then((x) => x.AboutComponent),
      },
      {
        path: 'more-info',
        loadComponent: () => import('./features/info/more-info/more-info.component').then((x) => x.MoreInfoComponent),
      }
    ]
  }
];
