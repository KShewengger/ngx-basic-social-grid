import { Post, PostUser } from '@app/models';
import { PostsActions } from '@app/states/posts/actions';
import { getPostsStateSelectors } from '@app/states/posts/selectors';
import { usersFeature } from '@app/states/users/reducers';
import { pluckUniqueEntities } from '@app/utils';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';

import { postsAdapter } from '../adapters';

const initialState = postsAdapter.getInitialState({
  loading: true
});

export const reducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, (state) => ({ ...state, loading: true })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) => {
    return postsAdapter.setAll(posts, { ...state, loading: false });
  }),
  on(PostsActions.loadPostsFailure, (state) => ({ ...state, loading: false })),

  on(PostsActions.loadPostSuccess, (state, { post }) => {
    return postsAdapter.updateOne(
      {
        id: post.id,
        changes: post
      },
      state
    );
  })
);

export const postsFeature = createFeature({
  name: 'posts',
  reducer,
  extraSelectors: ({ selectPostsState }) => {
    const commonSelectors = getPostsStateSelectors(selectPostsState);

    const selectPostsWithUsers = createSelector(
      commonSelectors.selectAllPosts,
      usersFeature.selectUsersSummaryEntities,
      (posts, userEntities) => {
        return posts.map<PostUser>((post) => {
          const user = userEntities[post.userId];
          return {
            ...post,
            user: user ?? null
          };
        });
      }
    );

    const selectUserPosts = (userId: Post['userId']) =>
      createSelector(selectPostsWithUsers, (posts) =>
        posts.filter((post) => post.user?.id === userId)
      );

    const selectPostWithUser = (id: PostUser['id']) =>
      createSelector(selectPostsWithUsers, (posts) => posts.find((post) => post.id === id));

    const selectTopPosts = createSelector(selectPostsWithUsers, (posts) =>
      pluckUniqueEntities(posts, 5)
    );

    const selectTopPostsTotal = createSelector(selectTopPosts, (topPosts) => topPosts.length);

    return {
      ...commonSelectors,
      selectPostsWithUsers,
      selectPostWithUser,
      selectTopPosts,
      selectTopPostsTotal,
      selectUserPosts
    };
  }
});
