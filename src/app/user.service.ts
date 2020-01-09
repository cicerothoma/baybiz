import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private db: AngularFireDatabase) { }
  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }
  //   create(user){
  //     return this.db.list('/users').push(user);
  //   }
}
