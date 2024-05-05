import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sg-containers',
  templateUrl: 'posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class PostsComponent {}
