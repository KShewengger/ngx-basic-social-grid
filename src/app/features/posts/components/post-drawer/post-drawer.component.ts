import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { PostComponent } from '@app/features/common/post/post.component';
import { PostUser } from '@app/models';

@Component({
  standalone: true,
  selector: 'sg-post-drawer',
  templateUrl: 'post-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton, MatIconButton, MatIcon, PostComponent]
})
export class PostDrawerComponent {
  public post = input<PostUser | null>();
  public close = output();
}
