import { User } from '@app/models';
import { EntityState } from '@ngrx/entity';

export interface UsersState extends EntityState<User> {
  loading: boolean;
}
