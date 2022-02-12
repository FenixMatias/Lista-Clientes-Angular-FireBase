import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';
  index: number;
  modoEdicion: number;

  //@ViewChild('nombreInput') nombreRef: ElementRef;
  //@ViewChild('apellidoInput') apellidoRef: ElementRef;

  constructor(private personasservice: PersonasService,
              private router: Router,
              private route: ActivatedRoute){

    this.personasservice.saludar.subscribe((indice: number) => alert("El indice es: " + indice));

  }

  ngOnInit() {
    
    this.index = this.route.snapshot.params['id'];
    //+ hace la conversión a numero entero
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if(this.modoEdicion != null && this.modoEdicion === 1){

      let persona: Persona = this.personasservice.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;

    }

  }
  
  onGuardarPersona(){

    let personaAdd = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1){

      this.personasservice.modificarPersona(this.index, personaAdd);

    }else{

      this.personasservice.agregarPersona(personaAdd);

    }
    //this.loggingService.enviaMensajeAConsola("Enviamos mensaje con Nombre: " + personaAdd.nombre + " Apellido: " + personaAdd.apellido);
    this.router.navigate(['personas']);
    
  }

  eliminarPersona(){

    if(this.index != null){

      this.personasservice.eliminarPersona(this.index);

    }
    this.router.navigate(['personas']);

  }

}
