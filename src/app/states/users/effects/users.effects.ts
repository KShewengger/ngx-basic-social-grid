import { inject } from '@angular/core';
import { UsersService } from '@app/services';
import { PostsActions } from '@app/states/posts/actions';
import { UsersActions } from '@app/states/users';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';

export const loadUsersEffect = createEffect(
  (actions = inject(Actions), usersService = inject(UsersService)) => {
    return actions.pipe(
      ofType(PostsActions.loadPosts),
      switchMap(() =>
        usersService.fetchUsers().pipe(
          map((users) => UsersActions.loadUsersSuccess(users)),
          catchError(() => [UsersActions.loadUsersFailure()])
        )
      )
    );
  },
  { functional: true }
);

export const loadUserEffect = createEffect(
  (actions = inject(Actions), usersService = inject(UsersService)) => {
    return actions.pipe(
      ofType(UsersActions.loadUser),
      switchMap(({ id }) =>
        usersService.fetchUser(id).pipe(map((user) => UsersActions.loadUserSuccess(user)))
      )
    );
  },
  { functional: true }
);
