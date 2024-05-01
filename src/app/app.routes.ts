import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('@app/dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: 'profile',
    title: 'Profile',
    loadComponent: () => import('@app/profile').then(c => c.ProfileComponent)
  },
  {
    path: 'posts',
    title: 'Posts',
    loadComponent: () => import('@app/posts').then(c => c.PostsComponent)
  },
  {
    path: 'albums',
    title: 'Albums',
    loadComponent: () => import('@app/albums').then(c => c.AlbumsComponent)
  },
  {
    path: 'photos',
    title: 'Photos',
    loadComponent: () => import('@app/photos').then(c => c.PhotosComponent)
  }
];
