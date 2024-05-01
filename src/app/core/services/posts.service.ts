import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { JSON_PLACEHOLDER_API } from '@app/core';
import { Api } from '@app/core/enums';

import { Post } from '../models';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private http = inject(HttpClient);
  private placeholderApi = inject(JSON_PLACEHOLDER_API);

  private baseApiUrl = `${this.placeholderApi}/${Api.Posts}`;

  public fetchPosts() {
    return this.http.get<Post[]>(this.baseApiUrl);
  }

  public fetchPost(id: Post['id']) {
    return this.http.get<Post>(`${this.baseApiUrl}/${id}`);
  }
}
