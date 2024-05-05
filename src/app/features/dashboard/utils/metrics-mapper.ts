import { Source } from '@app/models';
import { metricImagePathMapper } from '@app/utils';

export function metricsMapper(source: Source, total: number) {
  return {
    label: source,
    icon: metricImagePathMapper[source],
    total
  };
}
