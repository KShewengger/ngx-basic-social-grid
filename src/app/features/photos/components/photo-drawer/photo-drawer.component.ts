import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sg-photo-drawer',
  templateUrl: './photo-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class PhotoDrawerComponent {}
