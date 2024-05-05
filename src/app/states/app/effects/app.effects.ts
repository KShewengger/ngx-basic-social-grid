import { inject } from '@angular/core';
import { AppActions } from '@app/states/app';
import { PhotosActions } from '@app/states/photos';
import { UsersActions } from '@app/states/users';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlbumsActions } from '@states/albums';
import { PostsActions } from '@states/posts';
import { concatMap } from 'rxjs';

export const initEffect = createEffect(
  (actions = inject(Actions)) => {
    return actions.pipe(
      ofType(AppActions.initialize),
      concatMap(() => [
        PostsActions.loadPosts(),
        UsersActions.loadUsers(),
        AlbumsActions.loadAlbums(),
        PhotosActions.loadPhotos()
      ])
    );
  },
  { functional: true }
);
