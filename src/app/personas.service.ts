import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';
import { Observable } from 'rxjs';

@Injectable()
export class PersonasService{

    personas: Persona[] = [];

    saludar = new EventEmitter<number>();

    constructor(private loggingservice: LoggingService, 
                private dataServices: DataServices){

    }

    setPersonas(personas: Persona[]){

        this.personas = personas;
    }

    obtenerPersonas(): Observable<Persona[]>{

        return this.dataServices.cargarPersonas();
    }

    agregarPersona(persona: Persona){
    
        this.loggingservice.enviaMensajeAConsola("Agregamos a persona con Nombre: " + persona.nombre + " Apellido: " + persona.apellido);
        if(this.personas == null){

            this.personas = [];
        }
        this.personas.push(persona);
        this.dataServices.guardarPersonas(this.personas);
    }

    encontrarPersona(index: number){

        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona: Persona){

        let personaI = this.personas[index];
        personaI.nombre = persona.nombre;
        personaI.apellido = persona.apellido;
        this.dataServices.modificarPersona(index, persona);
    }

    eliminarPersona(index: number){

        this.personas.splice(index, 1);
        this.dataServices.eliminarPersona(index);
        //Se vuelve a guardar el arreglo para regenerar los indices en la bd
        this.regenerarPersonas();
    }

    regenerarPersonas(){

        if(this.personas != null){

            this.dataServices.guardarPersonas(this.personas);
        }
    }

}