import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { PostsActions } from './actions';
import * as effects from './effects';
import { PostsFacade } from './facade';
import { postsFeature } from './reducers';

const postsProviders = [
  provideState(postsFeature),
  provideEffects(effects),
  PostsFacade
];

export {
  PostsActions,
  PostsFacade,
  postsProviders
};
