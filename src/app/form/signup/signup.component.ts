import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase'
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  

  constructor(private authService: AuthService, 
    private db: AngularFireDatabase, 
    private userService: UserService,
    private router: Router) { }

//  save(user: NgForm){
//   this.userService.create(user);

//    }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }
}
