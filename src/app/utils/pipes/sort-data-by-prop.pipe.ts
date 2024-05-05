import { Pipe, PipeTransform } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Pipe({
  standalone: true,
  name: 'sgSortDataByProp'
})
export class SortDataByPropPipe implements PipeTransform {
  public transform<T>(data: T[], sortEvent: Sort | null): T[] {
    if (!sortEvent) return data;

    const { active, direction } = sortEvent as {
      active: keyof T;
      direction: Sort['direction'];
    };

    if (direction === '') return data;

    const sortedData = data.sort((a, b) => {
      const valueA = a[active] ?? '';
      const valueB = b[active] ?? '';

      let comparison = 0;

      if (valueA > valueB) {
        comparison = 1;
      } else if (valueA < valueB) {
        comparison = -1;
      }

      return direction === 'asc' ? comparison : -comparison;
    });

    return [...sortedData];
  }
}
