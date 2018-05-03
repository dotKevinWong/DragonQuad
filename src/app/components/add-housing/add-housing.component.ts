import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-housing',
  templateUrl: './add-housing.component.html',
  styleUrls: ['./add-housing.component.css']
})
export class AddHousingComponent implements OnInit {
  title:any;
  shortTitle:any;
  description:any;
  type:any;
  price:any;
  image:any;
  housingLocation:any;
  date:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let listing = {
      title: this.title,
      shortTitle: this.shortTitle,
      description: this.description,
      type: this.type,
      price: this.price,
      housingLocation: this.housingLocation,
      date: this.date
    }

    this.firebaseService.addHousing(listing);

    this.router.navigate(['housing']);
  }

}
