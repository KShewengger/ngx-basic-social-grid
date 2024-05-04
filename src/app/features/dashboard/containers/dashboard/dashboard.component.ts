import { SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PhotosFacade } from '@app/states/photos';
import { AlbumsFacade } from '@states/albums';
import { PostsFacade } from '@states/posts';

@Component({
  standalone: true,
  selector: 'sg-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SlicePipe],
})
export class DashboardComponent {
  private postsFacade = inject(PostsFacade);
  private albumsFacade = inject(AlbumsFacade);
  private photosFacade = inject(PhotosFacade);

  public posts = this.postsFacade.posts;
  public albums = this.albumsFacade.albums;
  public photos = this.photosFacade.photos;
}
