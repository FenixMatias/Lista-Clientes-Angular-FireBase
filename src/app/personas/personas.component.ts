import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personaservice: PersonasService,
              private router: Router
  ){}

    ngOnInit(): void {
      
      this.personaservice.obtenerPersonas()
      .subscribe(
        (personas: Persona[]) => {
  
          this.personas = personas;
          this.personaservice.setPersonas(personas);
        }
      );
    }

  agregar() {
    
    this.router.navigate(['personas/agregar'])

  }

}
