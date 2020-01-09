import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { query } from '@angular/core/src/render3';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// export interface Item { name: String};

export class CategoryService {
  categories: Observable<any[]>
  constructor(private db: AngularFireDatabase) { }


  getCategories() {
    // return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges().map(categories => { 
    // return categories.map(c => ({ key: c.payload.key, ...c.payload.val() })); 
    // }); 
     
    return this.db.list('categories').valueChanges();
    
  }
}
