import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = {
    username: 'Peter',
    email: 'peter@gmail.com'
  } as any;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() { }
}
