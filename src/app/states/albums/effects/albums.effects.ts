import { inject } from '@angular/core';
import { AlbumsService } from '@app/services';
import { PostsActions } from '@app/states/posts/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';

import { AlbumsActions } from '../actions';

export const loadAlbumsEffect = createEffect((
  actions = inject(Actions),
  albumsService = inject(AlbumsService)
) => {
  return actions.pipe(
    ofType(PostsActions.loadPosts),
    switchMap(() =>
      albumsService.fetchAlbums().pipe(
        map(users => AlbumsActions.loadAlbumsSuccess(users)),
        catchError(() => [AlbumsActions.loadAlbumsFailure()])
      )
    ),
  );
}, { functional: true });

export const loadAlbumEffect = createEffect((
  actions = inject(Actions),
  albumsService = inject(AlbumsService)
) => {
  return actions.pipe(
    ofType(AlbumsActions.loadAlbum),
    switchMap(({ id }) =>
      albumsService.fetchAlbum(id).pipe(
        map(album => AlbumsActions.loadAlbumSuccess(album)),
      )
    ),
  );
}, { functional: true });
