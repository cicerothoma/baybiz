import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from './../../category.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { BusinessService } from '../business.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-biz',
  templateUrl: './add-biz.component.html',
  styleUrls: ['./add-biz.component.css']
})


export class AddBizComponent  {
categories$;
  formGroup = this.fb.group({
    file: [null, Validators.required]
  });
  

  constructor(private categoryService: CategoryService, 
    private businessService: BusinessService,
    private router: Router,
    private fb: FormBuilder, 
    private cd: ChangeDetectorRef) { 
      // The function for list the categories and it's tied to the categories service at ../../category.service.ts
    this.categories$ = categoryService.getCategories();
      console.log(this.categories$)
  }
  
  save(business){
    //The function that saves the business on submit 
    this.businessService.create(business);
    // After submiting this function takes them to all the list of business
    this.router.navigate(['/businesses'])
  }

  onFileChange(event) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
        
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

}
