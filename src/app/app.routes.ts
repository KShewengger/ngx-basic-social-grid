import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('@app/dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('@app/profile').then(c => c.ProfileComponent)
  },
  {
    path: 'posts',
    loadComponent: () => import('@app/posts').then(c => c.PostsComponent)
  },
  {
    path: 'albums',
    loadComponent: () => import('@app/albums').then(c => c.AlbumsComponent)
  },
  {
    path: 'photos',
    loadComponent: () => import('@app/photos').then(c => c.PhotosComponent)
  }
];
