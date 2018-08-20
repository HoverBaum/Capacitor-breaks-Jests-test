import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private user: any = {}

  constructor(private storage: StorageService) { }

  setUser(user) {
    this.user = user;
    this.storage.set({key: user, value: JSON.stringify(user)})
  }

  getUser() {
    return this.user;
  }
}
