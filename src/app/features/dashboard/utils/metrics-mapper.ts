import { Source } from '@app/models';
import { platformIconMapper } from '@app/utils';

export function metricsMapper(source: Source, total: number) {
  return {
    label: source,
    icon: platformIconMapper[source],
    total
  };
}
