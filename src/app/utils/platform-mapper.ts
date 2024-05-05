import { Source } from '@app/models';

export const platformIconMapper: Record<Source, string> = {
  [Source.Dashboard]: 'table_chart_view',
  [Source.Posts]: 'sticky_note_2',
  [Source.Albums]: 'photo_library',
  [Source.Photos]: 'image'
};

export const metricImagePathMapper: Record<Source, string> = {
  [Source.Dashboard]: '',
  [Source.Posts]: 'assets/images/custom/posts.png',
  [Source.Albums]: 'assets/images/custom/album.png',
  [Source.Photos]: 'assets/images/custom/photography.png'
};
