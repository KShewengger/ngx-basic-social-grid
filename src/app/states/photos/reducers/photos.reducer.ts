import { Photo, PhotoAlbum } from '@app/models';
import { albumsFeature } from '@app/states/albums/reducers';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';

import { PhotosActions } from '../actions';
import { photosAdapter } from '../adapters';
import { getPhotosStateSelectors } from '../selectors';

const initialState = photosAdapter.getInitialState({
  loading: true,
});

export const reducer = createReducer(
  initialState,
  on(PhotosActions.loadPhotos, (state) => ({ ...state, loading: true })),
  on(PhotosActions.loadPhotosSuccess, (state, { photos }) => {
    return photosAdapter.setAll(photos, { ...state, loading: false });
  }),
  on(PhotosActions.loadPhotosFailure, (state) => ({
    ...state,
    loading: false,
  })),

  on(PhotosActions.loadPhotoSuccess, (state, { photo: { id, ...changes } }) => {
    return photosAdapter.updateOne(
      {
        id,
        changes,
      },
      state,
    );
  }),
);

export const photosFeature = createFeature({
  name: 'photos',
  reducer,
  extraSelectors: ({ selectPhotosState }) => {
    const commonSelectors = getPhotosStateSelectors(selectPhotosState);

    const selectAlbumPhotosWithAuthors = (albumId: Photo['albumId']) =>
      createSelector(
        commonSelectors.selectAlbumPhotos(albumId),
        albumsFeature.selectAlbumsWithUsersEntities,
        (photos, albumEntities) => {
          return photos.map<PhotoAlbum>((photo) => ({
            ...photo,
            album: albumEntities[albumId],
          }));
        },
      );

    const selectPhotoAlbumWithAuthor = (id: Photo['id']) =>
      createSelector(selectAlbumPhotosWithAuthors(id), (photos) =>
        photos.find((photo) => photo.id === id),
      );

    return {
      ...commonSelectors,
      selectAlbumPhotosWithAuthors,
      selectPhotoAlbumWithAuthor,
    };
  },
});
