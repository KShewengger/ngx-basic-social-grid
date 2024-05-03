import { Photo } from '@app/models';
import { EntityState } from '@ngrx/entity';

export interface PhotosState extends EntityState<Photo> {
  loading: boolean;
}
