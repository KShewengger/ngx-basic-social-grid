import { z } from 'zod';

const AlbumSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string()
});

export type Album = z.infer<typeof AlbumSchema>;
