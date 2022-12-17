import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavigationEnd, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

const firestore = firebase.firestore;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  userFavourites: any;
  userRef: any;
  sub: Subscription;

  constructor(
    private afstore: AngularFirestore,
    private authService: AuthService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Here is the dashing line comes in the picture.
        // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    // Getting user favourited recipes
    this.userRef = this.afstore.doc(`users/${this.authService.getUID()}`);
    this.userRef.get().forEach((doc: any) => {
      this.userFavourites = doc.data().favourites;
      if(this.userFavourites === undefined) {
        this.userFavourites = [];
      }
    });
  }

  removeFromFavourites(currId: string) {
    let confirmMessage = 'Are you sure you want to delete this recipe?';
    if(confirm(confirmMessage) == true) {
      this.userRef.get().subscribe((doc: any) => {
        doc.data().favourites.forEach((e: any) => {
          if (e.idMeal === currId) {
            this.userRef.update({
              favourites: firestore.FieldValue.arrayRemove(e)
            });
            this.router.navigate(['/profile'])
          }
        })
      })
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}