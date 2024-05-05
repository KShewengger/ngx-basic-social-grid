import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NAVIGATION_ITEMS } from '@app/constants';
import { UsersFacade } from '@states/users';

@Component({
  standalone: true,
  selector: 'sg-app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [
    NgClass,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatIcon,
    MatTooltip
  ]
})
export class AppComponent {
  public usersFacade = inject(UsersFacade);

  public userName = this.usersFacade.currentUserName;

  public readonly navigationItems = NAVIGATION_ITEMS;
}
