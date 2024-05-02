import { Album } from '@app/models';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const albumsAdapter: EntityAdapter<Album> = createEntityAdapter<Album>();
