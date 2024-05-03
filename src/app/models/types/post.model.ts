import { UserSummarySchema } from '@app/models';
import { z } from 'zod';

export const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string()
});

export const PostUserSchema = PostSchema
  .omit({ userId: true })
  .extend({
    user: UserSummarySchema
  });

export type Post = z.infer<typeof PostSchema>;
export type PostUser = z.infer<typeof PostUserSchema>;
