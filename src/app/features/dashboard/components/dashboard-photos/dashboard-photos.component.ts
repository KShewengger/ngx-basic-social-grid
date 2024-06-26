import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { PhotosFacade } from '@app/states/photos';
import { PhotoComponent } from '@features/common/photo';

@Component({
  standalone: true,
  selector: 'sg-dashboard-photos',
  templateUrl: 'dashboard-photos.component.html',
  styleUrl: 'dashboard-photos.component.scss',
  imports: [
    NgClass,
    MatCard,
    MatCardContent,
    MatIcon,
    MatCardHeader,
    MatCardTitle,
    MatProgressSpinner,
    PhotoComponent
  ]
})
export class DashboardPhotosComponent {
  private photosFacade = inject(PhotosFacade);

  public photos = this.photosFacade.topPhotos;
  public totalPhotos = this.photosFacade.totalTopPhotos;
  public loading = this.photosFacade.loading;
}
