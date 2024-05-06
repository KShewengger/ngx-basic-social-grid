import { NgClass, NgOptimizedImage } from '@angular/common';
import { booleanAttribute, Component, computed, input } from '@angular/core';
import { Photo } from '@app/models';

@Component({
  standalone: true,
  selector: 'sg-photo',
  templateUrl: 'photo.component.html',
  styleUrl: 'photo.component.scss',
  imports: [NgClass, NgOptimizedImage]
})
export class PhotoComponent {
  public photo = input.required<Photo>();
  public showFullPhotoPreview = input(false, { transform: booleanAttribute });

  public photoPreview = computed(
    () => (this.showFullPhotoPreview() ? this.photo()?.url : this.photo()?.thumbnailUrl) ?? ''
  );
}
