import { PostUser } from '@app/models';
import { PostsActions } from '@app/states/posts/actions';
import { getPostsStateSelectors } from '@app/states/posts/selectors';
import { usersFeature } from '@app/states/users/reducers';
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
    return postsAdapter.updateOne({
      id: post.id,
      changes: post
    }, state);
  }),
);

export const postsFeature = createFeature({
  name: 'posts',
  reducer,
  extraSelectors: ({
    selectPostsState,
  }) => {
    const commonSelectors = getPostsStateSelectors(selectPostsState);

    const selectPostsWithUsers = createSelector(
      commonSelectors.selectAllPosts,
      usersFeature.selectUserEntities,
      (posts, userEntities) => {
        return posts.map<PostUser>((post) => {
          const user = userEntities[post.userId];
          return {
            ...post,
            user: user ? {
              id: user.id,
              name: user.name,
              email: user.email,
            } : null,
          };
        });
      }
    );

    const selectPostWithUser = (id: PostUser['id']) => createSelector(
      selectPostsWithUsers,
      (posts) => posts.find(post => post.id === id)
    );

    return {
      ...commonSelectors,
      selectPostsWithUsers,
      selectPostWithUser
    };
  }
});
