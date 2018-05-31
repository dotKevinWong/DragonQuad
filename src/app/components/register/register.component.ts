import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: any;
  password: any;
  state: string = '';
  error: any;
  
  constructor(public af: AngularFire, private router: Router, public flashMessage:FlashMessagesService) {
  
  }
  
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
        this.flashMessage.show('Success! You have successfully created an account!',
        {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/'])
      }).catch(
      (err) => {
        console.log(err);
        this.flashMessage.show('Sorry! That e-mail is already in use.',
        {cssClass: 'alert-danger', timeout: 10000});
        this.error = err;
      })
    }
  }

  ngOnInit() {
  }

}
