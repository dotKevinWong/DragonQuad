import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SearchService {

  constructor(private db: AngularFireDatabase) { }
  
  getProducts(start, end): FirebaseListObservable<any> {
    return this.db.list('/products', {
      query : {
        orderByChild: 'title',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
  });
}

  getEvents(start, end): FirebaseListObservable<any> {
    return this.db.list('/events', {
      query : {
        orderByChild: 'shortTitle',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
  });
}

  getListings(start, end): FirebaseListObservable<any> {
    return this.db.list('/listings', {
      query : {
        orderByChild: 'type',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
  });
}

  getGigs(start, end): FirebaseListObservable<any> {
    return this.db.list('/gigs', {
      query : {
        orderByChild: 'title',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
  });
}

}