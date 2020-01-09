import { AllCategoriesComponent } from './all-categories/all-categories/all-categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './form/login/login.component';
import { NavBarComponent } from './form/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home/home.component';
import { SignupComponent } from './form/signup/signup.component';
import { ProfileComponent } from './form/profile/profile.component';
import { AddBizComponent } from './business/add-biz/add-biz.component';
import { AuthGuardService } from './form/auth-guard.service';
import { BusinessesComponent } from './business/businesses/businesses.component';
import { HotelsComponent } from './all-categories/hotels/hotels.component';
import { TechnologyComponent } from './all-categories/technology/technology.component';
import { EducationComponent } from './all-categories/education/education.component';

const routes: Routes = [ 
{path:'', component: HomeComponent},
{path:'login', component:SigninComponent},
{path:'signup', component: SignupComponent},
{path:'', component:NavBarComponent},
{path:'', component:ProfileComponent},
{path:'addbusiness', component:AddBizComponent, 
  canActivate: [AuthGuardService]
},
{path:'businesses', component:BusinessesComponent},
{path:'allcategories', component:AllCategoriesComponent},
{path:'hotels', component:HotelsComponent},
{path:'technology', component:TechnologyComponent},
{path:'education', component:EducationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
