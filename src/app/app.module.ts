import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

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
  {path:'', component:HomeComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'product/:id', component:ProductComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'edit-product/:id', component:EditProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
