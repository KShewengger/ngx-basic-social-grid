import { UserSummary } from '@app/models';

export function pluckUniqueEntities<T extends { user: UserSummary }>(
  entities: T[],
  pluckCount: number,
) {
  const uniqueEntities = entities.reduce((entityMap, post) => {
    if (post.user && !entityMap.has(post.user.id)) {
      entityMap.set(post.user.id, post);
    }
    return entityMap;
  }, new Map());

  return Array.from(uniqueEntities.values()).toSpliced(pluckCount);
}
