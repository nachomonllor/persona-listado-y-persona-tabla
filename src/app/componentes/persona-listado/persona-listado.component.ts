import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css']
})
export class PersonaListadoComponent implements OnInit {

  listaPer : Persona[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
