import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';

const firestore = firebase.firestore;

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  details: any
  recipeId: any;
  isSubscribed: boolean | undefined;
  recipeInfo : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afstore: AngularFirestore,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.details = data['recipe']['meals'][0];
      this.recipeId = this.details.idMeal;
    });
    this.checkForSubscription();
    this.recipeInfo = {
      idMeal: this.details.idMeal,
      strMeal: this.details.strMeal,
      strMealThumb: this.details.strMealThumb,
      strInstructions: this.details.strInstructions
    }
  }

  checkForSubscription() {
    this.afstore.collection('users').get().subscribe((snapshot) => {      
      snapshot.docs.forEach((doc: any) => {
        if(doc.data().favourites !== undefined) {
          if (doc.id === this.authService.getUID() 
          && doc.data().favourites.some((e: { idMeal: any; }) => e.idMeal === this.recipeId)) {
            this.isSubscribed = true;
          }  
        }
      })
    })
  }

  addToFavourites() {
    this.afstore.doc(`users/${this.authService.getUID()}`).update({
      favourites: firestore.FieldValue.arrayUnion(this.recipeInfo)
    });
    this.checkForSubscription();
  }

}
