import { Component, inject } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Source } from '@app/models';
import { platformIconMapper } from '@app/utils';
import { PostsFacade } from '@states/posts';

@Component({
  standalone: true,
  selector: 'sg-dashboard-posts',
  templateUrl: 'dashboard-posts.component.html',
  styleUrl: 'dashboard-posts.component.scss',
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle, MatIcon],
})
export class DashboardPostsComponent {
  private postsFacade = inject(PostsFacade);

  public posts = this.postsFacade.topPosts;

  public readonly postIcon = platformIconMapper[Source.Posts];
}
