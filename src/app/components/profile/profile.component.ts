import { Component, OnInit, HostBinding } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  id: any;
  products: any;

  constructor(public af: AngularFire, private router: Router, private firebaseService:FirebaseService, private route:ActivatedRoute) {
    this.af.auth.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  ngOnInit() {
      // Get ID
    this.id = this.route.snapshot.params['id'];
    
    this.firebaseService.getProducts(this.id).subscribe(products => { 
       console.log(products);
       this.products = products;
  });
  }
}
