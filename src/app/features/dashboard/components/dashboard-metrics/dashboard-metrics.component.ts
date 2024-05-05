import { NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { metricsMapper } from '@app/features/dashboard/utils';
import { Source } from '@app/models';
import { PhotosFacade } from '@app/states/photos';
import { AlbumsFacade } from '@states/albums';
import { PostsFacade } from '@states/posts';

@Component({
  standalone: true,
  selector: 'sg-dashboard-metrics',
  templateUrl: 'dashboard-metrics.component.html',
  styleUrl: 'dashboard-metrics.component.scss',
  imports: [NgClass, MatCard, MatCardContent, MatIcon],
})
export class DashboardMetricsComponent {
  private postsFacade = inject(PostsFacade);
  private albumsFacade = inject(AlbumsFacade);
  private photosFacade = inject(PhotosFacade);

  public totalTopPosts = this.postsFacade.totalTopPosts;
  public totalTopAlbums = this.albumsFacade.totalTopAlbums;
  public totalTopPhotos = this.photosFacade.totalTopPhotos;

  public metrics = computed(() => [
    metricsMapper(Source.Posts, this.totalTopPosts()),
    metricsMapper(Source.Albums, this.totalTopAlbums()),
    metricsMapper(Source.Photos, this.totalTopPhotos()),
  ]);
}
