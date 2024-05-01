import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Api } from '@app/core/enums';

import { Photo } from '../models';
import { JSON_PLACEHOLDER_API } from '../tokens';


@Injectable({ providedIn: 'root' })
export class PhotosService {
  private http = inject(HttpClient);
  private placeholderApi = inject(JSON_PLACEHOLDER_API);

  private baseApiUrl = `${this.placeholderApi}/${Api.Photos}`;

  public fetchPhotos() {
    return this.http.get<Photo[]>(this.baseApiUrl);
  }

  public fetchPhoto(id: Photo['id']) {
    return this.http.get<Photo>(`${this.baseApiUrl}/${id}`);
  }
}
