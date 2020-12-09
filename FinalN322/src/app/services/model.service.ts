import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ModelService  {

  private user: any;

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) { 
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.user = user;
      } else {
        console.log('none');
        this.user = '';
      }
    });

  }

  signInAnonymously(): void {
    this.auth.signInAnonymously();
  }

  logoutUser(): void {
    console.log("logoutUser")
    this.auth.signOut();
  }

  signUp(): void{
      console.log("signUp");
    }
  

  getFirestoreData(): void {
    // this.auth.signInAnonymously().then((data) => {});
    if (this.user) {
      console.log('none');
      this.firestore
        .collection('PokeManager')
        .get()
        .subscribe((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            console.log(doc.id);
          });
        });
    }
  }

}

