import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class SigninComponent {

  constructor(private authService: AuthService, private auth: AuthService) { }

  ngOnInit() {
  }
// login
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  };

  login(){
   this.auth.login()
  }
  loginFacebook(){
    this.auth.loginFacebook()
  }

}
