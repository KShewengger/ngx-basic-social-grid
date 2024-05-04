import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NAVIGATION_ITEMS } from '@app/constants';
import { UsersFacade } from '@states/users';

@Component({
  standalone: true,
  selector: 'sg-app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatSidenavModule, MatIconModule],
})
export class AppComponent {
  public usersFacade = inject(UsersFacade);

  public userName = this.usersFacade.currentUserName;
  public userEmail = this.usersFacade.currentUserEmail;

  public readonly navigationItems = NAVIGATION_ITEMS;
}
