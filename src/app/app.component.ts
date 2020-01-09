import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './form/auth.service';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'baybiz';

 constructor(private auth: AuthService, 
    router: Router,
    private userService: UserService,
    db: AngularFirestore)
   {
   auth.user$.subscribe(user => {
     if (user) {
        
      userService.save(user);

      let returnUrl =  localStorage.getItem('returnUrl');
      router.navigateByUrl(returnUrl)
     }
   });
 }


}
