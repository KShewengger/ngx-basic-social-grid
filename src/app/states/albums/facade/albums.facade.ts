import { inject, Injectable } from '@angular/core';
import { Album } from '@app/models';
import { Store } from '@ngrx/store';

import { albumsFeature } from '../reducers';

@Injectable()
export class AlbumsFacade {
  private store = inject(Store);

  public loading = this.store.selectSignal(albumsFeature.selectLoading);

  public albums = this.store.selectSignal(albumsFeature.selectAllAlbums);

  public usersAlbums = this.store.selectSignal(albumsFeature.selectAlbumsWithUsers);

  public albumEntities = this.store.selectSignal(albumsFeature.selectAlbumEntities);

  public totalAlbums = this.store.selectSignal(albumsFeature.selectTotalAlbums);

  public topAlbums = this.store.selectSignal(albumsFeature.selectTopAlbums);

  public totalTopAlbums = this.store.selectSignal(albumsFeature.selectTopAlbumsTotal);

  public album = (id: Album['id']) => this.store.selectSignal(albumsFeature.selectAlbum(id));

  public userAlbums = (userId: Album['userId']) =>
    this.store.selectSignal(albumsFeature.selectUserAlbums(userId))();

  public albumOwner = (id: Album['id']) =>
    this.store.selectSignal(albumsFeature.selectAlbumOwner(id))();
}
