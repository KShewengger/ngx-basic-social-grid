import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { AlbumsActions } from './actions';
import * as effects from './effects';
import { AlbumsFacade } from './facade';
import { albumsFeature } from './reducers';

const albumsProviders = [
  provideState(albumsFeature),
  provideEffects(effects),
  AlbumsFacade,
];

export { AlbumsActions, AlbumsFacade, albumsProviders };
