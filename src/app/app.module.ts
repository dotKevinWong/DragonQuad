import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { SearchService } from './services/search.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { HousingComponent } from './components/housing/housing.component';
import { EventsComponent } from './components/events/events.component';
import { GigsComponent } from './components/gigs/gigs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { ListingComponent } from './components/listing/listing.component';
import { EventComponent } from './components/event/event.component';
import { GigComponent } from './components/gig/gig.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddHousingComponent } from './components/add-housing/add-housing.component';
import { EditHousingComponent } from './components/edit-housing/edit-housing.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { AddGigComponent } from './components/add-gig/add-gig.component';
import { EditGigComponent } from './components/edit-gig/edit-gig.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SearchComponent } from './components/search/search.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAzwi29rBFn2Tzp4riCWaLRvpGNaafGDqE",
    authDomain: "dragonquad-32573.firebaseapp.com",
    databaseURL: "https://dragonquad-32573.firebaseio.com",
    projectId: "dragonquad-32573",
    storageBucket: "dragonquad-32573.appspot.com",
    messagingSenderId: "240943759488"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'products', component:ProductsComponent, canActivate: [AuthService]},
  {path: 'product/:id', component:ProductComponent, canActivate: [AuthService]},
  {path: 'add-product', component:AddProductComponent, canActivate: [AuthService]},
  {path: 'edit-product/:id', component:EditProductComponent, canActivate: [AuthService]},
  {path: 'housing', component:HousingComponent, canActivate: [AuthService]},
  {path: 'listing/:id', component:ListingComponent, canActivate: [AuthService]},
  {path: 'add-housing', component:AddHousingComponent, canActivate: [AuthService]},
  {path: 'edit-housing/:id', component:EditHousingComponent, canActivate: [AuthService]},
  {path: 'events', component: EventsComponent, canActivate: [AuthService]},
  {path: 'event/:id', component: EventComponent, canActivate: [AuthService]},
  {path: 'add-event', component: AddEventComponent, canActivate: [AuthService]},
  {path: 'edit-event/:id', component: EditEventComponent, canActivate: [AuthService]},
  {path: 'gigs', component: GigsComponent, canActivate: [AuthService]},
  {path: 'gig/:id', component: GigComponent, canActivate: [AuthService]},
  {path: 'add-gig', component: AddGigComponent, canActivate: [AuthService]},
  {path: 'edit-gig/:id', component: EditGigComponent, canActivate: [AuthService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    HousingComponent,
    EventsComponent,
    GigsComponent,
    NavbarComponent,
    ProductComponent,
    ListingComponent,
    EventComponent,
    GigComponent,
    AddProductComponent,
    EditProductComponent,
    AddHousingComponent,
    EditHousingComponent,
    AddEventComponent,
    EditEventComponent,
    AddGigComponent,
    EditGigComponent,
    LoginComponent,
    RegisterComponent,
    HowItWorksComponent,
    ProfileComponent,
    EditProfileComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService, AuthService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
