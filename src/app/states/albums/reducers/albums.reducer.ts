import { createFeature, createReducer, on } from '@ngrx/store';

import { AlbumsActions } from '../actions';
import { albumsAdapter } from '../adapters';
import { getAlbumsStateSelectors } from '../selectors';


const initialState = albumsAdapter.getInitialState({
  loading: true
});

export const reducer = createReducer(
  initialState,
  on(AlbumsActions.loadAlbums, (state) => ({ ...state, loading: true })),
  on(AlbumsActions.loadAlbumsSuccess, (state, { albums }) => {
    return albumsAdapter.setAll(albums, { ...state, loading: false });
  }),
  on(AlbumsActions.loadAlbumsFailure, (state) => ({ ...state, loading: false })),

  on(AlbumsActions.loadAlbumSuccess, (state, { album }) => {
    return albumsAdapter.setOne(album, state);
  }),
);

export const albumsFeature = createFeature({
  name: 'albums',
  reducer,
  extraSelectors: ({
    selectAlbumsState,
  }) => getAlbumsStateSelectors(selectAlbumsState)
});
