import { Album } from '@app/models';
import { EntityState } from '@ngrx/entity';

export interface AlbumsState extends EntityState<Album> {
  loading: boolean;
}
