import { Post } from '@app/models';
import { EntityState } from '@ngrx/entity';

export interface PostsState extends EntityState<Post> {
  loading: boolean;
}
