import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { UsersActions } from './actions';
import * as effects from './effects';
import { UsersFacade } from './facade';
import { usersFeature } from './reducers';

const usersProviders = [
  provideState(usersFeature),
  provideEffects(effects),
  UsersFacade
];

export {
  UsersActions,
  UsersFacade,
  usersProviders
};
