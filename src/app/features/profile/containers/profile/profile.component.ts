import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCard, MatCardAvatar, MatCardContent, MatCardHeader } from '@angular/material/card';
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

  public currentUser = this.usersFacade.currentUser;
}
