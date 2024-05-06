import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
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
import { BaseFilter } from '@app/abstracts';
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
    MatProgressSpinner,
    DrawerComponent,
    PostComponent,
    ExtractUserInitialsPipe,
    SortDataByPropPipe
  ]
})
export class PostsComponent extends BaseFilter {
  private postsFacade = inject(PostsFacade);

  private posts = this.postsFacade.usersPosts;
  public loading = this.postsFacade.loading;

  public sortEvent = signal<Sort | null>(null);
  public openedPost = signal<PostUser | null>(null);

  public filteredPosts = computed(() => filterDataBySearch(this.posts(), 'title', this.search()));

  public paginatePosts = computed(() =>
    this.filteredPosts().slice(this.startPage(), this.endPage())
  );

  public totalFilteredPosts = computed(() => this.filteredPosts().length);

  public readonly displayedColumns = ['title', 'body', 'avatar'];

  constructor() {
    super({ pageSize: 5 });
  }
}
