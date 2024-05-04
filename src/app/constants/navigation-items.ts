import { Source } from '@app/models';
import { platformIconMapper } from '@app/utils';

export const NAVIGATION_ITEMS = [
  {
    label: Source.Dashboard,
    path: Source.Dashboard,
    icon: platformIconMapper[Source.Dashboard],
  },
  {
    label: Source.Posts,
    path: Source.Posts,
    icon: platformIconMapper[Source.Posts],
  },
  {
    label: Source.Albums,
    path: Source.Albums,
    icon: platformIconMapper[Source.Albums],
  },
  {
    label: Source.Photos,
    path: Source.Photos,
    icon: platformIconMapper[Source.Photos],
  },
];
