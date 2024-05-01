import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sg-containers',
  templateUrl: './albums.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class AlbumsComponent {}
