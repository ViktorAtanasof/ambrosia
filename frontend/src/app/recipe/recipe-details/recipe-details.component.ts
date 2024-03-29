import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AuthService } from 'src/app/auth/auth.service';

const firestore = firebase.firestore;

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  details: any;
  recipeId: string | undefined;
  isSubscribed: boolean | undefined;
  recipeInfo: Object | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afstore: AngularFirestore,
    public authService: AuthService
  ) { }

  ngOnInit(): void {  
    this.activatedRoute.data.subscribe(data => {
      /* console.log(data); */
      // Object -> recipe -> meals[Objects]
      this.details = data['recipe']['meals'][0];
      this.recipeId = this.details.idMeal;
    });
    this.checkForSubscription();
    this.recipeInfo = {
      idMeal: this.details.idMeal,
      strMeal: this.details.strMeal,
      strMealThumb: this.details.strMealThumb,
      strInstructions: this.details.strInstructions,
      strYoutube: this.details.strYoutube
    }
  }

  checkForSubscription() {
    this.afstore.collection('users').get().subscribe((snapshot) => {
      snapshot.docs.forEach((doc: any) => {
        if (doc.data().favourites !== undefined) {
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
