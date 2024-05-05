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
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import { MatTooltip } from '@angular/material/tooltip';
import { PostUser } from '@app/models';
import { ExtractUserInitialsPipe, filterDataBySearch, SortDataByPropPipe } from '@app/utils';
import { DrawerComponent } from '@features/common/drawer';
import { PostComponent } from '@features/common/post';
import { PostsFacade } from '@states/posts';

@Component({
  standalone: true,
  selector: 'sg-containers',
  templateUrl: 'posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderRowDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatPaginator,
    MatTooltip,
    MatSort,
    MatSortHeader,
    DrawerComponent,
    ExtractUserInitialsPipe,
    SortDataByPropPipe,
    PostComponent
  ]
})
export class PostsComponent {
  private postsFacade = inject(PostsFacade);

  private posts = this.postsFacade.usersPosts;

  public search = signal<string>('');
  public pageIndex = signal<number>(0);
  public pageEvent = signal<PageEvent | null>(null);
  public sortEvent = signal<Sort | null>(null);
  public openedPost = signal<PostUser | null>(null);

  public filteredPosts = computed(() => filterDataBySearch(this.posts(), 'title', this.search()));

  public paginatePosts = computed(() =>
    this.filteredPosts().slice(this.startPage(), this.endPage())
  );

  public totalFilteredPosts = computed(() => this.filteredPosts().length);

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

  public readonly displayedColumns = ['title', 'body', 'avatar'];
  public readonly pageSize = 5;

  public handleSearch(value: string) {
    this.pageIndex.set(0);
    this.search.set(value);
  }
}
