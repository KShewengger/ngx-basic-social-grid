import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { Album } from '@app/models';
import { PhotosFacade } from '@app/states/photos';
import { filterDataBySearch } from '@app/utils';
import { AlbumComponent } from '@features/common/album';
import { AlbumsFacade } from '@states/albums';

@Component({
  standalone: true,
  selector: 'sg-containers',
  templateUrl: './albums.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCard, MatCardContent, MatCardHeader, AlbumComponent]
})
export class AlbumsComponent {
  private albumsFacade = inject(AlbumsFacade);
  private photosFacade = inject(PhotosFacade);

  public search = signal<string>('');

  private albums = this.albumsFacade.usersAlbums;

  public filteredAlbums = computed(() => filterDataBySearch(this.albums(), 'title', this.search()));

  public totalFilteredAlbums = computed(() => this.filteredAlbums().length);

  public albumPhotos = (albumId: Album['id']) =>
    computed(() => this.photosFacade.albumPhotos(albumId));
}
