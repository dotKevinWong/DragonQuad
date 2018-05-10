import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  products: FirebaseListObservable<any[]>;
  product: FirebaseObjectObservable<any>;
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  events: FirebaseListObservable<any[]>;
  event: FirebaseObjectObservable<any>;
  gigs: FirebaseListObservable<any[]>;
  gig: FirebaseObjectObservable<any>;
  productFolder: any;
  housingFolder: any;
  eventFolder: any;
  gigFolder: any;
  userId: string;

  constructor(private af: AngularFire, private db: AngularFireDatabase) {
    this.productFolder = 'productImages';
    this.housingFolder = 'housingImages';
    this.eventFolder = 'eventImages';
    this.gigFolder = 'gigImages';
    this.products = this.af.database.list('/products') as FirebaseListObservable<Product[]>
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>
    this.events = this.af.database.list('/events') as FirebaseListObservable<Event[]>
    this.gigs = this.af.database.list('/gigs') as FirebaseListObservable<Gig[]>
    this.af.auth.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  getProducts(id){
    return this.products;
  }
  
  getListings(id){
    return this.listings;
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

  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
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
      let path = `/${this.productFolder}/${this.userId}${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        product.image = selectedFile.name;
        product.path = path;
        product.userId = this.userId
        return this.products.push(product);
      });
    }
  }

  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.housingFolder}/${this.userId}${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        listing.userId = this.userId
        return this.listings.push(listing);
      });
    }
  }

  addEvent(event){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.eventFolder}/${this.userId}${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        event.image = selectedFile.name;
        event.path = path;
        event.userId = this.userId
        return this.events.push(event);
      });
    }
  }

  addGig(gig){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.gigFolder}/${this.userId}${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        gig.image = selectedFile.name;
        gig.path = path;
        gig.userId = this.userId
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

  updateListing(id, listing){
    return this.listings.update(id, listing);
  }

  deleteListing(id){
    return this.listings.remove(id);
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
  listingType?:string;
  shortTitle?:string;
  image?:string;
  description?:string;
  payment?:string;
  condition?:string;
  price?:string;
  userLocation?:string;
}

interface Listing{
  $key?:string;
  title?:string;
  shortTitle?:string;
  description?:string;
  type?:string;
  address?:string;
  price?:string;
  date?:string;
  image?:string;
  bedroom?:string;
  bathroom?:string;
  sqft?:string;
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
