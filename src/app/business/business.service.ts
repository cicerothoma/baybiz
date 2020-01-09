import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private db: AngularFireDatabase) { }
  // Save all the businesses or pushes the businesses to the database
  create(business){
    return this.db.list('/business').push(business);
  }
  getAll(){
    return this.db.list('/business');
  }

}
