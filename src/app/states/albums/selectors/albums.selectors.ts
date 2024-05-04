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

  const selectTopAlbums = createSelector(
    selectAllAlbums,
    (albums) => albums.toSpliced(7)
  );

  const selectTopAlbumsTotal = createSelector(
    selectTopAlbums,
    (topAlbums) => topAlbums.length
  );

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
    selectAlbumsLoading,
    selectTopAlbums,
    selectTopAlbumsTotal,
  };
}
