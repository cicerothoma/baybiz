import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
// import { NavbarComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
// @ViewChild('navbar') navbar: NavbarComponent
export class NavBarComponent {
 
  constructor(public auth: AuthService) { 
    };
    
    logout(){
    this.auth.logout();
  }



}
