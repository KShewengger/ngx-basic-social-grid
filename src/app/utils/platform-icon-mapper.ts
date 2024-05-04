import { Source } from '@app/models';

export const platformIconMapper: Record<Source, string> = {
  [Source.Dashboard]: 'table_chart_view',
  [Source.Posts]: 'sticky_note_2',
  [Source.Albums]: 'photo_library',
  [Source.Photos]: 'image',
};
