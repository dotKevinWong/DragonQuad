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
        orderByChild: 'title',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
  });
}
}