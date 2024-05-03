import { z } from 'zod';

import { UserSchema } from './user.model';

export const AlbumSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string()
});

export const AlbumUserSchema = AlbumSchema
  .omit({ userId: true })
  .extend({
    user: UserSchema.pick({ id: true, name: true, email: true }).or(z.null())
  });

export type Album = z.infer<typeof AlbumSchema>;
export type AlbumUser = z.infer<typeof AlbumUserSchema>;
