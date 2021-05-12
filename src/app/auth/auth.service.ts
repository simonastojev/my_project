import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isUserAuthenticated = false;

  constructor() { }

  get isUserAuthenticated(): boolean {
    // eslint-disable-next-line no-underscore-dangle
    return this._isUserAuthenticated;
  }

  logIn(){
    // eslint-disable-next-line no-underscore-dangle
    this._isUserAuthenticated = true;
  }

  logOut(){
    this._isUserAuthenticated = false;
  }
}
