import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  title:any;
  listingType:any;
  shortTitle:any;
  description:any;
  condition:any;
  price:any;
  payment:any;
  image:any;
  userLocation:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let product = {
      title: this.title,
      listingType: this.listingType,
      shortTitle: this.shortTitle,
      description: this.description,
      condition:this.condition,
      price: this.price,
      payment: this.payment,
      userLocation: this.userLocation
    }

    this.firebaseService.addProduct(product);

    this.router.navigate(['products']);
  }

}
