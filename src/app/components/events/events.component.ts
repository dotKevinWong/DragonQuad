import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {SearchService} from '../../services/search.service';
import { Subject } from 'rxjs/Subject';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  id:any;
  events:any;
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
    this.searchSvc.getEvents(this.startAt, this.endAt)
                    .subscribe(events => this.events = events)
                    
    // Get ID
    this.id = this.route.snapshot.params['id'];
    
    this.firebaseService.getEvents(this.id).subscribe(events => {
      console.log(events);
      this.events = events;
      
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.events.path);
      storageRef.child(this.events.path).getDownloadURL().then((url) => {
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