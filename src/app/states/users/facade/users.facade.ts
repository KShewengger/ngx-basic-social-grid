import { inject, Injectable } from '@angular/core';
import { User } from '@app/models';
import { Store } from '@ngrx/store';

import { usersFeature } from '../reducers';

@Injectable()
export class UsersFacade {
  private store = inject(Store);

  public users = this.store.selectSignal(
    usersFeature.selectAllUsers
  );

  public userEntities = this.store.selectSignal(
    usersFeature.selectUserEntities
  );

  public totalUsers = this.store.selectSignal(
    usersFeature.selectTotalUsers
  );

  public user = (id: User['id']) => this.store.selectSignal(
    usersFeature.selectUser(id)
  );
}
