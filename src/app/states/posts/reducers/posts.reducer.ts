import { PostsActions } from '@app/states/posts/actions';
import { getPostsStateSelectors } from '@app/states/posts/selectors';
import { createFeature, createReducer, on } from '@ngrx/store';

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
  }) => getPostsStateSelectors(selectPostsState)
});
