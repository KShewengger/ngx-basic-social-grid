import { Photo } from '@app/models';
import { createSelector, Selector } from '@ngrx/store';

import { photosAdapter } from '../adapters';
import { PhotosState } from '../models';

export function getPhotosStateSelectors<T>(
  state: Selector<T, PhotosState>
) {
  const {
    selectAll: selectAllPhotos,
    selectEntities: selectPhotoEntities,
    selectTotal: selectTotalPhotos,
    selectIds: selectPhotoIds,
  } = photosAdapter.getSelectors(state);

  const selectPhotosLoading = createSelector(
    state,
    (PhotosState) => PhotosState.loading
  );

  const selectPhoto = (id: Photo['id']) => createSelector(
    selectPhotoEntities,
    (photos) => photos[id]
  );

  const selectAlbumPhotos = (albumId: Photo['albumId']) => createSelector(
    selectAllPhotos,
    (photos) => photos.filter(photo => photo.albumId === albumId)
  );

  return {
    selectAllPhotos,
    selectPhotoEntities,
    selectTotalPhotos,
    selectPhotoIds,
    selectPhoto,
    selectAlbumPhotos,
    selectPhotosLoading
  };
}
