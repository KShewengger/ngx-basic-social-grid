import { Post } from '@app/models';
import { createActionGroup, emptyProps } from '@ngrx/store';

export const PostsActions = createActionGroup({
  source: 'Posts',
  events: {
    loadPosts: emptyProps(),
    loadPostsSuccess: (posts: Post[]) => ({ posts }),
    loadPostsFailure: emptyProps(),

    loadPost: (id: Post['id']) => ({ id }),
    loadPostSuccess: (post: Post) => ({ post }),
  },
});
