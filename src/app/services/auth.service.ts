import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Observable"

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  
    login(email, password): Observable<any> {
        return Observable.fromPromise(        this.afAuth.Auth.signInWithEmailAndPassword(email, password)
        );
    }
  
}
