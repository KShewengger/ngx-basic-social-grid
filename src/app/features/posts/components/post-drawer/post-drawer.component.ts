import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sg-post-drawer',
  templateUrl: 'post-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class PostDrawerComponent {}
