import { z } from 'zod';

import { UserSummarySchema } from './user.model';

export const AlbumSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string()
});

export const AlbumUserSchema = AlbumSchema.omit({ userId: true }).extend({
  user: UserSummarySchema
});

export type Album = z.infer<typeof AlbumSchema>;
export type AlbumUser = z.infer<typeof AlbumUserSchema>;
