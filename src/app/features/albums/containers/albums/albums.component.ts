import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal
} from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
    PostComponent
  ]
})
export class AlbumsComponent {
  private albumsFacade = inject(AlbumsFacade);

  public search = signal<string>('');
  public pageIndex = signal<number>(0);
  public pageEvent = signal<PageEvent | null>(null);
  public openedAlbum = signal<AlbumUser | null>(null);

  private albums = this.albumsFacade.usersAlbums;

  public filteredAlbums = computed(() => filterDataBySearch(this.albums(), 'title', this.search()));

  public paginatedAlbums = computed(() =>
    this.filteredAlbums().slice(this.startPage(), this.endPage())
  );

  public totalFilteredAlbums = computed(() => this.filteredAlbums().length);

  public startPage = computed(
    () => (this.pageEvent()?.pageIndex ?? 0) * (this.pageEvent()?.pageSize ?? 0)
  );

  public endPage = computed(() => this.startPage() + (this.pageEvent()?.pageSize ?? this.pageSize));

  private handlePaginationUpdate = effect(
    () => {
      this.pageIndex.set(this.pageEvent()?.pageIndex ?? 0);
    },
    { allowSignalWrites: true }
  );

  public readonly pageSize = 5;

  public handleSearch(value: string) {
    this.pageIndex.set(0);
    this.search.set(value);
  }
}
