import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sg-album-drawer',
  templateUrl: 'album-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class AlbumDrawerComponent {}
