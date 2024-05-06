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
import { Photo } from '@app/models';
import { PhotosFacade } from '@app/states/photos';
import { filterDataBySearch } from '@app/utils';
import { DrawerComponent } from '@features/common/drawer';
import { PhotoComponent } from '@features/common/photo';
import { PostComponent } from '@features/common/post';

@Component({
  standalone: true,
  selector: 'sg-photos',
  templateUrl: 'photos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatPaginator,
    PhotoComponent,
    DrawerComponent,
    PostComponent
  ]
})
export class PhotosComponent {
  private photosFacade = inject(PhotosFacade);

  public search = signal<string>('');
  public pageIndex = signal<number>(0);
  public pageEvent = signal<PageEvent | null>(null);
  public openedPhoto = signal<Photo | null>(null);

  private photos = this.photosFacade.photos;
  public loading = this.photosFacade.loading;

  public filteredPhotos = computed(() => filterDataBySearch(this.photos(), 'title', this.search()));

  public totalFilteredPhotos = computed(() => this.filteredPhotos().length);

  public paginatedPhotos = computed(() =>
    this.filteredPhotos().slice(this.startPage(), this.endPage())
  );

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

  public readonly pageSize = 10;

  public handleSearch(value: string) {
    this.pageIndex.set(0);
    this.search.set(value);
  }
}
