import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { EventsComponent } from './components/events/events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { EventComponent } from './components/event/event.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { LoginComponent } from './components/login/login.component';

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
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    EventsComponent,
    NavbarComponent,
    ProductComponent,
    EventComponent,
    AddProductComponent,
    EditProductComponent,
    AddEventComponent,
    EditEventComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireAuth,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
