import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sg-photos',
  templateUrl: 'photos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class PhotosComponent {}
