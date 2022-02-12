import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService){

  }

  ngOnInit(): void {
  }

  login(form: NgForm){

    const email = form.value.email;
    const password = form.value.password;
    this.loginservice.login(email, password);
  }

}
