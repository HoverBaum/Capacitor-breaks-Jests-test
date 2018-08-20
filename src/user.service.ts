import { Injectable, Inject } from '@angular/core';
import { STORAGE_SERVICE_TOKEN } from './tokens';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private user: any = {}

  constructor(@Inject(STORAGE_SERVICE_TOKEN) private storage) { }

  setUser(user) {
    this.user = user;
    this.storage.set({key: user, value: JSON.stringify(user)})
  }

  getUser() {
    return this.user;
  }
}
