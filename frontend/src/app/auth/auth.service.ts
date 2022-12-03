import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { Router } from '@angular/router';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = authState(this.fireAuth);

  constructor(private fireAuth: Auth, private router: Router) { }


  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.fireAuth, email, password)
      .then((response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.fireAuth ,email, password)
      .then((response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  logout() {
    signOut(this.fireAuth)
      .then((response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message);
      })
  }
}
