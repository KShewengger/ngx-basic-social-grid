import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'sgExtractUserInitials'
})
export class ExtractUserInitialsPipe implements PipeTransform {
  public transform(value: string | null) {
    if (!value) return '';

    const matches = value.match(/\b\w/g) || [];
    return matches.slice(0, 2).join('');
  }
}
