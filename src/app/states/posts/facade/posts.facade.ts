import { inject, Injectable } from '@angular/core';
import { Post } from '@app/models';
import { postsFeature } from '@app/states/posts/reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class PostsFacade {
  private store = inject(Store);

  public posts = this.store.selectSignal(
    postsFeature.selectAllPosts
  );

  public postEntities = this.store.selectSignal(
    postsFeature.selectPostEntities
  );

  public totalPosts = this.store.selectSignal(
    postsFeature.selectTotalPosts
  );

  public post = (id: Post['id']) => this.store.selectSignal(
    postsFeature.selectPost(id)
  );

  public userPosts = (userId: Post['userId']) => this.store.selectSignal(
    postsFeature.selectUserPosts(userId)
  );
}