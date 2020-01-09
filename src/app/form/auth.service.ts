import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    token: string;
    //constructor(private authService: AuthService) {}

    user$: Observable<firebase.User>

    constructor(private router: Router, 
      private afAuth: AngularFireAuth,
      private route: ActivatedRoute) {
      this.user$ = afAuth.authState;
    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(
              error => console.log(error)
          )
 
    }

    signinUser(email: string, password: string) {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        firebase.auth().signInWithEmailAndPassword (email, password)
          .then(
              response => {
               
                console.log(response)
              }
          )
          .catch(
              error => console.log(error)
          );
    }

    logout() {
        this.afAuth.auth.signOut();     
    }
    login(){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
       
    }
    loginFacebook(){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl);
     this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
    }

    getIdToken() {
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}