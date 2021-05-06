import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-persona-tabla',
  templateUrl: './persona-tabla.component.html',
  styleUrls: ['./persona-tabla.component.css']
})
export class PersonaTablaComponent implements OnInit {

  @Input() listaPersonasTabla : Persona[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.listaPersonasTabla.push(new Persona("1", "Arnold", 75, "https://upload.wikimedia.org/wikipedia/commons/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg"));
    this.listaPersonasTabla.push(new Persona("2", "Axl", 58, "https://upload.wikimedia.org/wikipedia/commons/6/62/Guns_n%C2%B4Roses_Palacio_de_los_Deportes_30-11-2016_%2830897913684%29.jpg"));
  }

}
