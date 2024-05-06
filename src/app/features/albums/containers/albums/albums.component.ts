import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { BaseFilter } from '@app/abstracts';
import { AlbumUser } from '@app/models';
import { filterDataBySearch } from '@app/utils';
import { AlbumComponent } from '@features/common/album';
import { DrawerComponent } from '@features/common/drawer';
import { PostComponent } from '@features/common/post';
import { AlbumsFacade } from '@states/albums';

@Component({
  standalone: true,
  selector: 'sg-containers',
  templateUrl: './albums.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    AlbumComponent,
    MatPaginator,
    DrawerComponent,
    PostComponent,
    MatProgressSpinner
  ]
})
export class AlbumsComponent extends BaseFilter {
  private albumsFacade = inject(AlbumsFacade);

  public search = signal<string>('');
  public openedAlbum = signal<AlbumUser | null>(null);

  private albums = this.albumsFacade.usersAlbums;
  public loading = this.albumsFacade.loading;

  public filteredAlbums = computed(() => filterDataBySearch(this.albums(), 'title', this.search()));

  public paginatedAlbums = computed(() =>
    this.filteredAlbums().slice(this.startPage(), this.endPage())
  );

  public totalFilteredAlbums = computed(() => this.filteredAlbums().length);

  constructor() {
    super({ pageSize: 10 });
  }

  public handleSearch(value: string) {
    this.pageIndex.set(0);
    this.search.set(value);
  }
}
