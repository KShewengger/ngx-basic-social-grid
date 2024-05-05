import { inject, Injectable } from '@angular/core';
import { Photo } from '@app/models';
import { photosFeature } from '@app/states/photos/reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class PhotosFacade {
  private store = inject(Store);

  public photos = this.store.selectSignal(photosFeature.selectAllPhotos);

  public photoEntities = this.store.selectSignal(
    photosFeature.selectPhotoEntities,
  );

  public totalphotos = this.store.selectSignal(photosFeature.selectTotalPhotos);

  public topPhotos = this.store.selectSignal(photosFeature.selectTopPhotos);

  public totalTopPhotos = this.store.selectSignal(
    photosFeature.selectTopPhotosTotal,
  );

  public photo = (id: Photo['id']) =>
    this.store.selectSignal(photosFeature.selectPhoto(id));

  public albumPhotos = (albumId: Photo['albumId']) =>
    this.store.selectSignal(photosFeature.selectAlbumPhotos(albumId));
}
