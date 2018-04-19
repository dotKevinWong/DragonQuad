import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private Router: Router) {
    this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  
  login() {
    const inputValue = this.form.value;
    this.authService.login(inputValue.email, inputValue.password)
      .subscribe(
        success => this.router.naviage(['/home']),
        error => alert(error))
  }
    
}
