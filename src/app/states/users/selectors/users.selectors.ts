import { User, UserSummary } from '@app/models';
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

  const selectUsersSummary = createSelector(
    selectAllUsers,
    (users) => {
      return users.map<UserSummary>((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      }));
    }
  );

  const selectUsersSummaryEntities = createSelector(
    selectUsersSummary,
    (users) => {
      return users.reduce((acc, user) => {
        if (!user) return acc;
        return { ...acc, [user.id]: user };
      }, {} as Record<User['id'], UserSummary>);
    }
  );

  const selectUsersLoading = createSelector(
    state,
    (state) => state.loading
  );

  const selectUser = (id: User['id']) => createSelector(
    selectUserEntities,
    (Users) => Users[id]
  );

  const selectCurrentUser = createSelector(
    selectAllUsers,
    (users) => ({
      ...users[0],
      name: 'Kristy Almuete',
      email: 'kristy@gmail.com',
    })
  );

  return {
    selectAllUsers,
    selectUserEntities,
    selectTotalUsers,
    selectUserIds,
    selectUser,
    selectUsersLoading,
    selectCurrentUser,
    selectUsersSummary,
    selectUsersSummaryEntities,
  };
}
