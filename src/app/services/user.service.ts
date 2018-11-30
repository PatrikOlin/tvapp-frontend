import { Injectable, OnDestroy } from '@angular/core';
import { ApiCallerService } from './apiCaller.service';
import { ErrorHandler } from './error.handler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  private userKey;
  public username;
  public userId;
  loggedIn = false;

  constructor(
    private apiCaller: ApiCallerService,
    private errorHandler: ErrorHandler,
    private router: Router) {}

  ngOnDestroy(): void {
    this.logout();
  }

  login(username: string, password: string) {
    this.setKey(username, password);
    this.apiCaller.login().subscribe((res) => {
      const encodedId = res.toString();
      console.log(encodedId);
      this.userId = atob(encodedId);
      sessionStorage.setItem('userId', this.userId);
      sessionStorage.setItem('username', username);
      this.username = username;
    }, (err) => {
      console.log('ERROR:', err);
      this.errorHandler.handleError(err.message);
    },
    () => {
      this.router.navigate(['watchlist']);
    });
  }

  logout() {
    sessionStorage.clear();
    this.username = '';
    this.isLoggedIn();
    this.router.navigate(['']);
  }

  setKey(username: string, password: string) {
    this.userKey = btoa(username + ':' + password);
    sessionStorage.setItem('key', this.userKey);
  }

  getKey() {
    this.userKey = sessionStorage.getItem('key');
    return this.userKey;
  }

  getUserId() {
    this.userId = sessionStorage.getItem('userId');
    return this.userId;
  }

  getUsername() {
    this.username = sessionStorage.getItem('username');
    return this.username;
  }

  getEncodedUserId() {
    let encodedUserId = sessionStorage.getItem('userId');
    for (let i = 0; i < 3; i++) {
      encodedUserId = btoa(encodedUserId);
    }
    console.log(encodedUserId);
    return encodedUserId;
  }

  isLoggedIn() {
    if (this.getUserId() != null) {
      this.loggedIn = true;
      return this.loggedIn;
    } else {
      this.loggedIn = false;
      return this.loggedIn;
    }
  }

}
