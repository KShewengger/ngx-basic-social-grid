import { inject } from '@angular/core';
import { PhotosService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';

import { PhotosActions } from '../actions';

export const loadPhotosEffect = createEffect((
  actions = inject(Actions),
  photosService = inject(PhotosService)
) => {
  return actions.pipe(
    ofType(PhotosActions.loadPhotos),
    switchMap(() =>
      photosService.fetchPhotos().pipe(
        map(Photos => PhotosActions.loadPhotosSuccess(Photos)),
        catchError(() => [PhotosActions.loadPhotosFailure()])
      )
    ),
  );
}, { functional: true });

export const loadPhotoEffect = createEffect((
  actions = inject(Actions),
  photosService = inject(PhotosService)
) => {
  return actions.pipe(
    ofType(PhotosActions.loadPhoto),
    switchMap(({ id }) =>
      photosService.fetchPhoto(id).pipe(
        map(Photo => PhotosActions.loadPhotoSuccess(Photo)),
      )
    ),
  );
}, { functional: true });
