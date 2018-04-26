import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-gig',
  templateUrl: './add-gig.component.html',
  styleUrls: ['./add-gig.component.css']
})
export class AddGigComponent implements OnInit {
  title:any;
  shortTitle:any;
  description:any;
  type:any;
  price:any;
  payment:any;
  image:any;
  location:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let gig = {
      title: this.title,
      shortTitle: this.shortTitle,
      description: this.description,
      type: this.type,
      price: this.price,
      payment: this.payment,
      location: this.location
    }

    this.firebaseService.addGig(gig);

    this.router.navigate(['gigs']);
  }

}
