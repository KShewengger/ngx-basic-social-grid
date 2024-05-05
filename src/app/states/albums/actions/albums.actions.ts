import { Album } from '@app/models';
import { createActionGroup, emptyProps } from '@ngrx/store';

export const AlbumsActions = createActionGroup({
  source: 'Albums',
  events: {
    loadAlbums: emptyProps(),
    loadAlbumsSuccess: (albums: Album[]) => ({ albums }),
    loadAlbumsFailure: emptyProps(),

    loadAlbum: (id: Album['id']) => ({ id }),
    loadAlbumSuccess: (album: Album) => ({ album })
  }
});
