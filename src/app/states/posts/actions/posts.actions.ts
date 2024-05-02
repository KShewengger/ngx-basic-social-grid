import { Post } from '@app/models';
import { createActionGroup, emptyProps } from '@ngrx/store';

export const PostsActions = createActionGroup({
  source: 'Posts',
  events: {
    loadPosts: emptyProps(),
    loadPostsDone: (posts: Post[]) => ({ posts }),
    loadPostsFailed: emptyProps(),

    loadPost: (id: Post['id']) => ({ id }),
    loadPostDone: (post: Post) => ({ post }),
  },
});
