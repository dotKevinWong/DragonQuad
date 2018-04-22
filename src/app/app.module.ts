import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { EventsComponent } from './components/events/events.component';
import { GigsComponent } from './components/gigs/gigs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { EventComponent } from './components/event/event.component';
import { GigComponent } from './components/gig/gig.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { AddGigComponent } from './components/add-gig/add-gig.component';
import { EditGigComponent } from './components/edit-gig/edit-gig.component';

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
  {path: 'products', component:ProductsComponent},
  {path: 'product/:id', component:ProductComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'edit-product/:id', component:EditProductComponent},
  {path: 'events', component: EventsComponent},
  {path: 'event/:id', component: EventComponent},
  {path: 'add-event', component: AddEventComponent},
  {path: 'edit-event/:id', component: EditEventComponent},
  {path: 'gigs', component: GigsComponent},
  {path: 'gig/:id', component: GigComponent},
  {path: 'add-gig', component: AddGigComponent},
  {path: 'edit-gig/:id', component: EditGigComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    EventsComponent,
    GigsComponent,
    NavbarComponent,
    ProductComponent,
    EventComponent,
    GigComponent,
    AddProductComponent,
    EditProductComponent,
    AddEventComponent,
    EditEventComponent,
    AddGigComponent,
    EditGigComponent,
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
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
