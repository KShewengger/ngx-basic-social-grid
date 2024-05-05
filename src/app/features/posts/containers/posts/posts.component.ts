import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
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
import { ExtractUserInitialsPipe, filterDataBySearch, SortDataByPropPipe } from '@app/utils';
import { PostsFacade } from '@states/posts';

@Component({
  standalone: true,
  selector: 'sg-containers',
  templateUrl: 'posts.component.html',
  styleUrl: 'posts.component.scss',
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
    ExtractUserInitialsPipe,
    SortDataByPropPipe
  ]
})
export class PostsComponent {
  private postsFacade = inject(PostsFacade);

  private posts = this.postsFacade.postsWithAuthors;

  public search = signal<string>('');
  public pageEvent = signal<PageEvent | null>(null);
  public sortEvent = signal<Sort | null>(null);

  public filteredPosts = computed(() => filterDataBySearch(this.posts(), 'title', this.search()));

  public paginatePosts = computed(() =>
    this.filteredPosts().slice(this.startPage(), this.endPage())
  );

  public totalFilteredPosts = computed(() => this.filteredPosts().length);

  public startPage = computed(
    () => (this.pageEvent()?.pageIndex ?? 0) * (this.pageEvent()?.pageSize ?? 0)
  );

  public endPage = computed(() => this.startPage() + (this.pageEvent()?.pageSize ?? this.pageSize));

  public readonly displayedColumns = ['title', 'body', 'avatar'];
  public readonly pageSize = 5;
}
