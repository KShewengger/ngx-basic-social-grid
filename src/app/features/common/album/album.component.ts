import { Component, computed, inject, input } from '@angular/core';
import { Album } from '@app/models';
import { PhotosFacade } from '@app/states/photos';
import { AlbumsFacade } from '@states/albums';

@Component({
  selector: 'sg-album',
  standalone: true,
  templateUrl: 'album.component.html',
  styleUrl: 'album.component.scss'
})
export class AlbumComponent {
  private albumsFacade = inject(AlbumsFacade);
  private photosFacade = inject(PhotosFacade);

  public id = input.required<Album['id']>();

  public album = computed(() => this.albumsFacade.album(this.id())());

  public albumPhotos = computed(() => {
    if (!this.album()) return [];
    return this.photosFacade.albumPhotos(this.album()!.id);
  });

  public title = computed(() => this.album()?.title ?? '');

  public coverPhoto = computed(() => this.albumPhotos()[0]?.thumbnailUrl ?? '');

  public totalPhotos = computed(() => this.albumPhotos().length);
}
