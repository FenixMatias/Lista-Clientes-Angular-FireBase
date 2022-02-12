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
      apiKey: "Poner tu api key aqui",
      authDomain: "Poner tu dominio aqui"
    })
  }

  isAuntenticado(){

    return this.loginService.isAuntenticado();
  }

  salir(){
    
    this.loginService.logout();
  }
 
  

}
