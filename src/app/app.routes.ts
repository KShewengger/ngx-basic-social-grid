import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () =>
      import('@features/dashboard').then((c) => c.DashboardComponent),
  },
  {
    path: 'profile',
    title: 'Profile',
    loadComponent: () =>
      import('@features/profile').then((c) => c.ProfileComponent),
  },
  {
    path: 'posts',
    title: 'Posts',
    loadComponent: () =>
      import('@features/posts').then((c) => c.PostsComponent),
  },
  {
    path: 'albums',
    title: 'Albums',
    loadComponent: () =>
      import('@features/albums').then((c) => c.AlbumsComponent),
  },
  {
    path: 'photos',
    title: 'Photos',
    loadComponent: () =>
      import('@features/photos').then((c) => c.PhotosComponent),
  },
];
