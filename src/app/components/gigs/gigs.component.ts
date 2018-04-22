import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.css']
})
export class GigsComponent implements OnInit {
  id:any;
  gigs:any;
  imageUrl:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    
    this.firebaseService.getGigs(this.id).subscribe(gigs => {
      console.log(gigs);
      this.gigs = gigs;
      
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.gigs.path);
      storageRef.child(this.gigs.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }
}
