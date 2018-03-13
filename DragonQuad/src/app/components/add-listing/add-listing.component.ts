import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
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
    let listing = {
      title: this.title,
      description: this.description,
      type: this.type,
      condition:this.condition,
      price: this.price,
      payment: this.payment
    }

    this.firebaseService.addListing(listing);

    this.router.navigate(['listings']);
  }

}
