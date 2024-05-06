import { Component, inject } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { PostComponent } from '@features/common/post';
import { PostsFacade } from '@states/posts';

@Component({
  standalone: true,
  selector: 'sg-dashboard-posts',
  templateUrl: 'dashboard-posts.component.html',
  styleUrl: 'dashboard-posts.component.scss',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatIcon,
    PostComponent,
    MatProgressSpinner
  ]
})
export class DashboardPostsComponent {
  private postsFacade = inject(PostsFacade);

  public posts = this.postsFacade.topPosts;
  public totalPosts = this.postsFacade.totalTopPosts;
  public loading = this.postsFacade.loading;
}
