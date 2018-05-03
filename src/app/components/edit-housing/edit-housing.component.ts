import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-housing',
  templateUrl: './edit-housing.component.html',
  styleUrls: ['./edit-housing.component.css']
})
export class EditHousingComponent implements OnInit {
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

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.title = listing.title;
      this.description = listing.description;
      this.type = listing.type;
      this.condition = listing.condition;
      this.price = listing.price;
      this.payment = listing.payment;
    });
  }

  onEditSubmit(){
    let listing = {
        title: this.title,
        description: this.description,
        type: this.type,
        condition:this.condition,
        price: this.price,
        payment: this.payment
    }

    this.firebaseService.updateListing(this.id, listing);

    this.router.navigate(['/housing']);
  }

}
