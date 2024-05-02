import { User } from '@app/models';
import { createSelector, Selector } from '@ngrx/store';

import { usersAdapter } from '../adapters';
import { UsersState } from '../models';

export function getUsersStateSelectors<T>(
  state: Selector<T, UsersState>
) {
  const {
    selectAll: selectAllUsers,
    selectEntities: selectUserEntities,
    selectTotal: selectTotalUsers,
    selectIds: selectUserIds,
  } = usersAdapter.getSelectors(state);

  const selectUsersLoading = createSelector(
    state,
    (state) => state.loading
  );

  const selectUser = (id: User['id']) => createSelector(
    selectUserEntities,
    (Users) => Users[id]
  );

  return {
    selectAllUsers,
    selectUserEntities,
    selectTotalUsers,
    selectUserIds,
    selectUser,
    selectUsersLoading
  };
}
