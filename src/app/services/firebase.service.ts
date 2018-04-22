import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  products: FirebaseListObservable<any[]>;
  product: FirebaseObjectObservable<any>;
  events: FirebaseListObservable<any[]>;
  event: FirebaseObjectObservable<any>;
  gigs: FirebaseListObservable<any[]>;
  gig: FirebaseObjectObservable<any>;
  productFolder: any;
  eventFolder: any;
  gigFolder: any;

  constructor(private af: AngularFire) {
    this.productFolder = 'productImages';
    this.eventFolder = 'eventImages';
    this.gigFolder = 'gigImages';
    this.products = this.af.database.list('/products') as FirebaseListObservable<Product[]>
    this.events = this.af.database.list('/events') as FirebaseListObservable<Event[]>
    this.gigs = this.af.database.list('/gigs') as FirebaseListObservable<Gig[]>
  }

  getProducts(id){
    return this.products;
  }

  getEvents(id){
    return this.events;
  }
  
  getGigs(id){
    return this.gigs;
  }

  getProductDetails(id){
    this.product = this.af.database.object('/products/'+id) as FirebaseObjectObservable<Product>
    return this.product;
  }
    
  getEventDetails(id){
    this.event = this.af.database.object('/events/'+id) as FirebaseObjectObservable<Event>
    return this.event;
  }  
  
  getGigDetails(id){
    this.gig = this.af.database.object('/gigs/'+id) as FirebaseObjectObservable<Gig>
    return this.gig;
  }

  addProduct(product){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.productFolder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        product.image = selectedFile.name;
        product.path = path;
        return this.products.push(product);
      });
    }
  }

  addEvent(event){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.eventFolder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        event.image = selectedFile.name;
        event.path = path;
        return this.events.push(event);
      });
    }
  }

  addGig(gig){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.gigFolder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        gig.image = selectedFile.name;
        gig.path = path;
        return this.gigs.push(gig);
      });
    }
  }

  updateProduct(id, product){
    return this.products.update(id, product);
  }

  deleteProduct(id){
    return this.products.remove(id);
  }
  
  updateEvent(id, event){
    return this.events.update(id, event);
  }

  deleteEvent(id){
    return this.events.remove(id);
  }

  updateGig(id, gig){
    return this.gigs.update(id, gig);
  }

  deleteGig(id){
    return this.gigs.remove(id);
  }

}

interface Product{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  description?:string;
  payment?:string;
  condition?:string;
}

interface Event{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  description?:string;
  payment?:string;
  condition?:string;
}

interface Gig{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  description?:string;
  payment?:string;
  condition?:string;
}
