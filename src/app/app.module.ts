import { AllCategoriesComponent } from './all-categories/all-categories/all-categories.component';
import { BusinessService } from './business/business.service';
import { CategoryService } from './category.service';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './form/auth-guard.service';
import { AuthService } from './form/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from './app-routing.module';
// For MDB Angular Free
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SigninComponent } from './form/login/login.component';
import { NavBarComponent } from './form/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home/home.component';
import { SignupComponent } from './form/signup/signup.component';
import { ProfileComponent } from './form/profile/profile.component';
import { DataStorageService } from './shared/data-storage.service';
import { AddBizComponent } from './business/add-biz/add-biz.component';
import { BusinessesComponent } from './business/businesses/businesses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCommonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatPseudoCheckboxModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { HotelsComponent } from './all-categories/hotels/hotels.component';
import { TechnologyComponent } from './all-categories/technology/technology.component';
import { EducationComponent } from './all-categories/education/education.component';


// export const firebaseConfig ={
//   apiKey: "AIzaSyAxoSPndryEM9WkeMqDWInd-43mcfhWvJw",
//   authDomain: "trial-de3a7.firebaseapp.com",
//   databaseURL: "https://trial-de3a7.firebaseio.com",
//   projectId: "trial-de3a7",
//   storageBucket: "trial-de3a7.appspot.com",
//   messagingSenderId: "552473522083",
//   appId: "1:552473522083:web:bb3cf7a8661c5483"
// }
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavBarComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    AddBizComponent,
    BusinessesComponent,
    AllCategoriesComponent,
    HotelsComponent,
    TechnologyComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    // MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
     ReactiveFormsModule,
     CustomFormsModule,
     BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuardService, 
    DataStorageService,
    UserService,
    CategoryService,
    BusinessService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
