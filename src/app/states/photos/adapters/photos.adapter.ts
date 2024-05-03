import { Photo } from '@app/models';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const photosAdapter: EntityAdapter<Photo> = createEntityAdapter<Photo>();
