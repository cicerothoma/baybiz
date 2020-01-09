import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {

  businessList$;

  constructor(private businessList: BusinessService) {
// Recieves all the businesses
  this.businessList$ = this.businessList.getAll().valueChanges();
   }
   

  ngOnInit() {
  }

}
