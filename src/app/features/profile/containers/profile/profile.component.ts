import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatCard, MatCardAvatar, MatCardContent, MatCardHeader } from '@angular/material/card';
import { PostsFacade } from '@states/posts';
import { UsersFacade } from '@states/users';

@Component({
  standalone: true,
  selector: 'sg-profile',
  templateUrl: 'profile.component.html',
  styleUrl: 'profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardAvatar]
})
export class ProfileComponent {
  private usersFacade = inject(UsersFacade);
  private postsFacade = inject(PostsFacade);

  public currentUser = this.usersFacade.currentUser;

  public posts = computed(() => this.postsFacade.userPosts(this.currentUser().id));
}
