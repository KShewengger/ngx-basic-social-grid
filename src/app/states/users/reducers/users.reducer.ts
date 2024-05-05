import { createFeature, createReducer, on } from '@ngrx/store';

import { UsersActions } from '../actions';
import { usersAdapter } from '../adapters';
import { getUsersStateSelectors } from '../selectors';

const initialState = usersAdapter.getInitialState({
  loading: true
});

export const reducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => {
    return usersAdapter.setAll(users, { ...state, loading: false });
  }),
  on(UsersActions.loadUsersFailure, (state) => ({ ...state, loading: false })),

  on(UsersActions.loadUserSuccess, (state, { user }) => {
    return usersAdapter.setOne(user, state);
  })
);

export const usersFeature = createFeature({
  name: 'users',
  reducer,
  extraSelectors: ({ selectUsersState }) => getUsersStateSelectors(selectUsersState)
});
