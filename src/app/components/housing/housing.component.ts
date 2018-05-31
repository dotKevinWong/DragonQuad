import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {SearchService} from '../../services/search.service';
import { Subject } from 'rxjs/Subject';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {
  id:any;
  listings:any;
  imageUrl:any;
  startAt = new Subject()
  endAt = new Subject()

  constructor(
    private searchSvc: SearchService,
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchSvc.getListings(this.startAt, this.endAt)
                    .subscribe(listings => this.listings = listings)
                    
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
  
  search($event) {
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
    
  }
}