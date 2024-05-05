import { Post } from '@app/models';
import { postsAdapter } from '@app/states/posts/adapters';
import { PostsState } from '@app/states/posts/models';
import { createSelector, Selector } from '@ngrx/store';

export function getPostsStateSelectors<T>(state: Selector<T, PostsState>) {
  const {
    selectAll: selectAllPosts,
    selectEntities: selectPostEntities,
    selectTotal: selectTotalPosts,
    selectIds: selectPostIds
  } = postsAdapter.getSelectors(state);

  const selectPostsLoading = createSelector(state, (postsState) => postsState.loading);

  const selectPost = (id: Post['id']) => createSelector(selectPostEntities, (posts) => posts[id]);

  return {
    selectAllPosts,
    selectPostEntities,
    selectTotalPosts,
    selectPostIds,
    selectPost,
    selectPostsLoading
  };
}
