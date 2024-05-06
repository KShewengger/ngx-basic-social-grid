import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { BaseFilter } from '@app/abstracts';
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
    PostComponent,
    MatProgressSpinner
  ]
})
export class PhotosComponent extends BaseFilter {
  private photosFacade = inject(PhotosFacade);

  public openedPhoto = signal<Photo | null>(null);

  private photos = this.photosFacade.photos;
  public loading = this.photosFacade.loading;

  public filteredPhotos = computed(() => filterDataBySearch(this.photos(), 'title', this.search()));

  public totalFilteredPhotos = computed(() => this.filteredPhotos().length);

  public paginatedPhotos = computed(() =>
    this.filteredPhotos().slice(this.startPage(), this.endPage())
  );

  constructor() {
    super({ pageSize: 10 });
  }
}
