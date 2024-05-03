import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PlatformTitleStrategyService extends TitleStrategy {
  private readonly title = inject(Title);

  public updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    this.title.setTitle(`Social Grid | ${title}`);
  }
}
