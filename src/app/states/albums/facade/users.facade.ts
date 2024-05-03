import { inject, Injectable } from '@angular/core';
import { Album } from '@app/models';
import { Store } from '@ngrx/store';

import { albumsFeature } from '../reducers';

@Injectable()
export class AlbumsFacade {
  private store = inject(Store);

  public albums = this.store.selectSignal(
    albumsFeature.selectAllAlbums
  );

  public albumEntities = this.store.selectSignal(
    albumsFeature.selectAlbumEntities
  );

  public totalAlbums = this.store.selectSignal(
    albumsFeature.selectTotalAlbums
  );

  public album = (id: Album['id']) => this.store.selectSignal(
    albumsFeature.selectAlbum(id)
  );
}
