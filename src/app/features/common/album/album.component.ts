import { Component, input } from '@angular/core';

@Component({
  selector: 'sg-album',
  standalone: true,
  templateUrl: 'album.component.html',
  styleUrl: 'album.component.scss'
})
export class AlbumComponent {
  public title = input.required<string>();
  public coverPhoto = input.required<string>();
  public totalPhotos = input.required<number>();
}
