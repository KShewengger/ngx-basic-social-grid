import { computed, effect, signal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export abstract class BaseFilter {
  protected search = signal<string>('');
  protected pageIndex = signal<number>(0);
  protected pageEvent = signal<PageEvent | null>(null);

  protected startPage = computed(
    () => (this.pageEvent()?.pageIndex ?? 0) * (this.pageEvent()?.pageSize ?? 0)
  );

  protected endPage = computed(
    () => this.startPage() + (this.pageEvent()?.pageSize ?? this.options.pageSize)
  );

  #handlePaginationUpdate = effect(
    () => {
      this.pageIndex.set(this.pageEvent()?.pageIndex ?? 0);
    },
    { allowSignalWrites: true }
  );

  constructor(public options: { pageSize: number }) {}

  protected handleSearch(value: string) {
    this.pageIndex.set(0);
    this.search.set(value);
  }
}
