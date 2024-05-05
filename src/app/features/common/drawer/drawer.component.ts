import { Component, effect, inject, model, Renderer2 } from '@angular/core';
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
  private renderer = inject(Renderer2);

  public open = model<boolean>(false);

  private checkOpenState = effect(() => {
    const classValue = this.open() ? 'overflow-hidden' : 'overflow-auto';
    this.renderer.addClass(document.body, classValue);
  });
}