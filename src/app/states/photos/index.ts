import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { PhotosActions } from './actions';
import * as effects from './effects';
import { PhotosFacade } from './facade';
import { photosFeature } from './reducers';

const photosProviders = [
  provideState(photosFeature),
  provideEffects(effects),
  PhotosFacade
];

export {
  PhotosActions,
  PhotosFacade,
  photosProviders
};
