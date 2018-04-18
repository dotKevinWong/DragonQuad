import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id;
  title;
  description;
  type;
  condition;
  price;
  image;
  payment;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getProductDetails(this.id).subscribe(product => {
      this.title = product.title;
      this.description = product.description;
      this.type = product.type;
      this.condition = product.condition;
      this.price = product.price;
      this.payment = product.payment;
    });
  }

  onEditSubmit(){
    let product = {
        title: this.title,
        description: this.description,
        type: this.type,
        condition:this.condition,
        price: this.price,
        payment: this.payment
    }

    this.firebaseService.updateProduct(this.id, product);

    this.router.navigate(['/products']);
  }

}
