import { inject } from '@angular/core';
import { PostsService } from '@app/services';
import { PostsActions } from '@app/states/posts/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';

export const loadPostsEffect = createEffect(
  (actions = inject(Actions), postsService = inject(PostsService)) => {
    return actions.pipe(
      ofType(PostsActions.loadPosts),
      switchMap(() =>
        postsService.fetchPosts().pipe(
          map((posts) => PostsActions.loadPostsSuccess(posts)),
          catchError(() => [PostsActions.loadPostsFailure()])
        )
      )
    );
  },
  { functional: true }
);

export const loadPostEffect = createEffect(
  (actions = inject(Actions), postsService = inject(PostsService)) => {
    return actions.pipe(
      ofType(PostsActions.loadPost),
      switchMap(({ id }) =>
        postsService.fetchPost(id).pipe(map((post) => PostsActions.loadPostSuccess(post)))
      )
    );
  },
  { functional: true }
);
