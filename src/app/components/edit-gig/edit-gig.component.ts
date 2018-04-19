import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-gig',
  templateUrl: './edit-gig.component.html',
  styleUrls: ['./edit-gig.component.css']
})
export class EditGigComponent implements OnInit {
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

    this.firebaseService.getGigDetails(this.id).subscribe(gig => {
      this.title = gig.title;
      this.description = gig.description;
      this.type = gig.type;
      this.condition = gig.condition;
      this.price = gig.price;
      this.payment = gig.payment;
    });
  }

  onEditSubmit(){
    let gig = {
        title: this.title,
        description: this.description,
        type: this.type,
        condition:this.condition,
        price: this.price,
        payment: this.payment
    }

    this.firebaseService.updateGig(this.id, gig);

    this.router.navigate(['/gigs']);
  }

}
