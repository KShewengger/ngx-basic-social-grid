import { Album } from '@app/models';
import { createSelector, Selector } from '@ngrx/store';

import { albumsAdapter } from '../adapters';
import { AlbumsState } from '../models';

export function getAlbumsStateSelectors<T>(
  state: Selector<T, AlbumsState>
) {
  const {
    selectAll: selectAllAlbums,
    selectEntities: selectAlbumEntities,
    selectTotal: selectTotalAlbums,
    selectIds: selectAlbumIds,
  } = albumsAdapter.getSelectors(state);

  const selectAlbumsLoading = createSelector(
    state,
    (state) => state.loading
  );

  const selectAlbum = (id: Album['id']) => createSelector(
    selectAlbumEntities,
    (Albums) => Albums[id]
  );

  return {
    selectAllAlbums,
    selectAlbumEntities,
    selectTotalAlbums,
    selectAlbumIds,
    selectAlbum,
    selectAlbumsLoading
  };
}
