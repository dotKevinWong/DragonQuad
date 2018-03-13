import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  id:any;
  listings:any;
  imageUrl:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    
    this.firebaseService.getListings(this.id).subscribe(listings => {
      console.log(listings);
      this.listings = listings;
      
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.listings.path);
      storageRef.child(this.listings.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }
}