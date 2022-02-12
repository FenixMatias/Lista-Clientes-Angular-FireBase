import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService){

  }

  ngOnInit(): void {
    
    firebase.initializeApp({
      apiKey: "AIzaSyDE3Pd1AaKsO2R8LkWsVMArLVrDmpQcl9I",
      authDomain: "listado-personas-angular-92172.firebaseapp.com"
    })
  }

  isAuntenticado(){

    return this.loginService.isAuntenticado();
  }

  salir(){
    
    this.loginService.logout();
  }
 
  

}
