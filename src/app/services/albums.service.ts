import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { JSON_PLACEHOLDER_API } from '@app/constants';
import { Api, Album } from '@app/models';

@Injectable({ providedIn: 'root' })
export class AlbumsService {
  private http = inject(HttpClient);
  private placeholderApi = inject(JSON_PLACEHOLDER_API);

  private baseApiUrl = `${this.placeholderApi}/${Api.Albums}`;

  public fetchAlbums() {
    return this.http.get<Album[]>(this.baseApiUrl);
  }

  public fetchAlbum(id: Album['id']) {
    return this.http.get<Album>(`${this.baseApiUrl}/${id}`);
  }
}
