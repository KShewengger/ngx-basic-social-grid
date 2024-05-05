import { Component, model } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { PostComponent } from '@app/features/common/post/post.component';

@Component({
  standalone: true,
  selector: 'sg-drawer',
  templateUrl: 'drawer.component.html',
  styleUrl: 'drawer.component.scss',
  imports: [MatIcon, PostComponent]
})
export class DrawerComponent {
  public open = model<boolean>(false);
}
