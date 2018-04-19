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
  description:any;
  type:any;
  condition:any;
  price:any;
  payment:any;
  image:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let product = {
      title: this.title,
      description: this.description,
      type: this.type,
      condition:this.condition,
      price: this.price,
      payment: this.payment
    }

    this.firebaseService.addProduct(product);

    this.router.navigate(['products']);
  }

}
