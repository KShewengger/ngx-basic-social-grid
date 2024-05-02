import { inject } from '@angular/core';
import { AppActions } from '@app/states/app';
import { UsersActions } from '@app/states/users';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsActions } from '@states/posts';
import { concatMap } from 'rxjs';


export const initEffect = createEffect((
  actions = inject(Actions),
) => {
  return actions.pipe(
    ofType(AppActions.initialize),
    concatMap(() => [
      PostsActions.loadPosts(),
      UsersActions.loadUsers()
    ]),
  );
}, { functional: true });
