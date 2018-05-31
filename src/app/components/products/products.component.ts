import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {SearchService} from '../../services/search.service';
import { Subject } from 'rxjs/Subject';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id:any;
  products:any;
  imageUrl:any;
  startAt = new Subject()
  endAt = new Subject()

  constructor(
    private searchSvc:SearchService,
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchSvc.getProducts(this.startAt, this.endAt)
                    .subscribe(products => this.products = products)
                    
    // Get ID
    this.id = this.route.snapshot.params['id'];
    
     this.firebaseService.getProducts(this.id).subscribe(products => { 
       console.log(products);
       this.products = products;
       
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.products.path);
      storageRef.child(this.products.path).getDownloadURL().then((url) => {
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