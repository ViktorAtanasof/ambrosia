import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser$ = authState(this.fireAuth);


  getUID() {
    return this.fireAuth.currentUser?.uid;
  }
  constructor(private fireAuth: Auth, private router: Router, private afstore: AngularFirestore) { }


  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.fireAuth, email, password)
      .then((res: any) => {
        this.afstore.doc(`users/${res.user.uid}`).set({
          email
        })
        this.router.navigate(['/']);
      })
      .catch((err) => {
        if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
          alert('That email address is taken. Try another.')
        } else {
          alert(err.message);
        }
      })
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.fireAuth, email, password)
      .then((res: any) => {
        if (res.user) {
        }
        this.router.navigate(['/']);
      })
      .catch((err) => {
        if (err.message === 'Firebase: Error (auth/wrong-password).') {
          alert('Wrong password.')
        } else if (err.message === 'Firebase: Error (auth/user-not-found).') {
          alert('Enter a valid email.')
        } else {
          alert(err.message);
        }
      })
  }

  logout() {
    signOut(this.fireAuth)
      .then((response: any) => {
        /*  console.log(response); */
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message);
      })
  }
}
