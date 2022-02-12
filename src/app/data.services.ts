import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.services';

@Injectable()
export class DataServices{

    constructor(private httpclient: HttpClient,
                private loginService: LoginService){}

        //Cargar Personas
        cargarPersonas(){
           const token = this.loginService.getIdToken();
           return this.httpclient.get<Persona[]>('Poner tu dominio aqui/datos.json?auth=' + token);
        }

        //Guardar persona
        guardarPersonas(personas: Persona[]){

            const token = this.loginService.getIdToken();
            this.httpclient.put('Poner tu dominio aqui/datos.json?auth=' + token, personas)
            .subscribe(
                response => console.log("Persona guardada" + response),
                error => console.log("Error al guardar persona: " + error)
            );
        }

        //Modificar persona
        modificarPersona(index: number, persona: Persona){

            const token = this.loginService.getIdToken();
            let url: string;
            url = 'Poner tu dominio aqui/datos/' + index + '.json?auth=' + token;
            this.httpclient.put(url, persona)
                .subscribe(
                    response => console.log("Persona modificada: " + response),
                    error => console.log("Error al modificar persona: " + error)
                );
        }

        //Eliminar Persona
        eliminarPersona(index: number){

            const token = this.loginService.getIdToken();
            let url: string;
            url = 'Poner tu dominio aqui/datos/' + index + '.json?auth=' + token;
            this.httpclient.delete(url)
                .subscribe(
                    response => console.log("Persona eliminada: " + response),
                    error => console.log("Error al eliminar persona: " + error)
                );
        }

}
