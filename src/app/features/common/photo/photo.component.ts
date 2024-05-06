import { booleanAttribute, Component, input } from '@angular/core';
import { Photo } from '@app/models';

@Component({
  standalone: true,
  selector: 'sg-photo',
  templateUrl: 'photo.component.html',
  styleUrl: 'photo.component.scss'
})
export class PhotoComponent {
  public photo = input.required<Photo>();
  public showFullPhotoPreview = input(false, { transform: booleanAttribute });
}
