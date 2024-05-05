import { Photo } from '@app/models';
import { createActionGroup, emptyProps } from '@ngrx/store';

export const PhotosActions = createActionGroup({
  source: 'Photos',
  events: {
    loadPhotos: emptyProps(),
    loadPhotosSuccess: (photos: Photo[]) => ({ photos }),
    loadPhotosFailure: emptyProps(),

    loadPhoto: (id: Photo['id']) => ({ id }),
    loadPhotoSuccess: (photo: Photo) => ({ photo })
  }
});
