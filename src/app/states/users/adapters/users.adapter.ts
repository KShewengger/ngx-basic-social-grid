import { User } from '@app/models';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>();
