import { User } from '@app/models';
import { createActionGroup, emptyProps } from '@ngrx/store';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    loadUsers: emptyProps(),
    loadUsersSuccess: (users: User[]) => ({ users }),
    loadUsersFailure: emptyProps(),

    loadUser: (id: User['id']) => ({ id }),
    loadUserSuccess: (user: User) => ({ user })
  }
});
