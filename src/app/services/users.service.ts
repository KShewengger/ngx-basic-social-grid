import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { JSON_PLACEHOLDER_API } from '@app/constants';
import { Api, User } from '@app/models';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private http = inject(HttpClient);
  private placeholderApi = inject(JSON_PLACEHOLDER_API);

  private baseApiUrl = `${this.placeholderApi}/${Api.Users}`;

  public fetchUsers() {
    return this.http.get<User[]>(this.baseApiUrl);
  }

  public fetchUser(id: User['id']) {
    return this.http.get<User>(`${this.baseApiUrl}/${id}`);
  }
}
