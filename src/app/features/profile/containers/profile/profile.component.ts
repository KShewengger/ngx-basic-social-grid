import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatCard, MatCardAvatar, MatCardContent, MatCardHeader } from '@angular/material/card';
import { Album } from '@app/models';
import { PhotosFacade } from '@app/states/photos';
import { AlbumComponent } from '@features/common/album';
import { DrawerComponent } from '@features/common/drawer';
import { PostComponent } from '@features/common/post';
import { AlbumsFacade } from '@states/albums';
import { PostsFacade } from '@states/posts';
import { UsersFacade } from '@states/users';

@Component({
  standalone: true,
  selector: 'sg-profile',
  templateUrl: 'profile.component.html',
  styleUrl: 'profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardAvatar,
    PostComponent,
    DrawerComponent,
    AlbumComponent
  ]
})
export class ProfileComponent {
  private usersFacade = inject(UsersFacade);
  private postsFacade = inject(PostsFacade);
  private albumsFacade = inject(AlbumsFacade);
  private photosFacade = inject(PhotosFacade);

  public currentUser = this.usersFacade.currentUser;

  public posts = computed(() => this.postsFacade.userPosts(this.currentUser().id));

  public albums = computed(() => this.albumsFacade.userAlbums(this.currentUser().id));

  public albumPhotos = (albumId: Album['id']) =>
    computed(() => this.photosFacade.albumPhotos(albumId));
}
