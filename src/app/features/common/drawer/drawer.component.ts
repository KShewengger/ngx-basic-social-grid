import { Component, DestroyRef, effect, inject, model, Renderer2 } from '@angular/core';
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
  private destroyRef = inject(DestroyRef);

  public open = model<boolean>(false);

  private checkOpenState = effect(() => {
    if (this.open()) {
      this.renderer.addClass(document.body, 'disable-scroll');
    } else {
      this.renderer.removeClass(document.body, 'disable-scroll');
    }
  });

  private onDestroy = this.destroyRef.onDestroy(() =>
    this.renderer.removeClass(document.body, 'disable-scroll')
  );
}
