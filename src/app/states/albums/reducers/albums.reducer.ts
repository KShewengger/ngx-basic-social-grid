import { Album, AlbumUser } from '@app/models';
import { usersFeature } from '@app/states/users/reducers';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';

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
  on(AlbumsActions.loadAlbumsFailure, (state) => ({
    ...state,
    loading: false
  })),

  on(AlbumsActions.loadAlbumSuccess, (state, { album }) => {
    return albumsAdapter.setOne(album, state);
  })
);

export const albumsFeature = createFeature({
  name: 'albums',
  reducer,
  extraSelectors: ({ selectAlbumsState }) => {
    const commonSelectors = getAlbumsStateSelectors(selectAlbumsState);

    const selectAlbumsWithUsers = createSelector(
      commonSelectors.selectAllAlbums,
      usersFeature.selectUserEntities,
      (albums, userEntities) => {
        return albums.map<AlbumUser>((album) => {
          const user = userEntities[album.userId];
          return {
            ...album,
            user: user ?? null
          };
        });
      }
    );

    const selectAlbumsWithUsersEntities = createSelector(selectAlbumsWithUsers, (albums) =>
      albums.reduce(
        (acc, album) => ({ ...acc, [album.id]: album }),
        {} as Record<number, AlbumUser>
      )
    );

    const selectAlbumWithUser = (id: AlbumUser['id']) =>
      createSelector(selectAlbumsWithUsersEntities, (albumsEntities) => albumsEntities[id]);

    const selectUserAlbums = (userId: Album['userId']) =>
      createSelector(selectAlbumsWithUsers, (albums) =>
        albums.filter((album) => album.user?.id === userId)
      );

    const selectAlbumOwner = (albumId: Album['id']) =>
      createSelector(
        commonSelectors.selectAlbum(albumId),
        usersFeature.selectUserEntities,
        (album, userEntities) => {
          if (!album) return null;
          return userEntities[album.userId];
        }
      );

    return {
      ...commonSelectors,
      selectAlbumsWithUsers,
      selectAlbumsWithUsersEntities,
      selectAlbumWithUser,
      selectUserAlbums,
      selectAlbumOwner
    };
  }
});
