import { Post } from '@app/models';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();
