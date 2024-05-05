import { z } from 'zod';

import { AlbumUserSchema } from './album.model';

export const PhotoSchema = z.object({
  albumId: z.number(),
  id: z.number(),
  title: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
});

export const PhotoAlbumSchema = PhotoSchema.omit({ albumId: true }).extend({
  album: AlbumUserSchema,
});

export type Photo = z.infer<typeof PhotoSchema>;
export type PhotoAlbum = z.infer<typeof PhotoAlbumSchema>;
