import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
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
    let event = {
      title: this.title,
      description: this.description,
      type: this.type,
      condition:this.condition,
      price: this.price,
      payment: this.payment
    }

    this.firebaseService.addEvent(event);

    this.router.navigate(['events']);
  }

}
