import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
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

    this.firebaseService.getEventDetails(this.id).subscribe(event => {
      this.title = event.title;
      this.description = event.description;
      this.type = event.type;
      this.condition = event.condition;
      this.price = event.price;
      this.payment = event.payment;
    });
  }

  onEditSubmit(){
    let event = {
        title: this.title,
        description: this.description,
        type: this.type,
        condition:this.condition,
        price: this.price,
        payment: this.payment
    }

    this.firebaseService.updateEvent(this.id, event);

    this.router.navigate(['/events']);
  }

}
