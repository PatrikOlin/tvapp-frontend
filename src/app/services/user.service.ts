import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  private userKey;
  loggedIn = false;

  ngOnDestroy(): void {
    this.logout();
  }

  login(username: string, password: string) {
    this.setKey(username, password);
    this.loggedIn = true;
  }

  logout() {
    sessionStorage.clear();
    this.loggedIn = false;
  }

  setKey(username: string, password: string) {
    this.userKey = btoa(username + ':' + password);
    sessionStorage.setItem('key', this.userKey);
  }

  getKey() {
    this.userKey = sessionStorage.getItem('key');
    return this.userKey;
  }

  isLoggedIn() {
    if (this.getKey() != null) {
      this.loggedIn = true;
      return this.loggedIn;
    } else {
      this.loggedIn = false;
      return this.loggedIn;
    }
  }

}
