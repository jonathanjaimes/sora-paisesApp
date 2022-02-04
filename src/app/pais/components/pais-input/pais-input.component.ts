import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {


  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //Es importante que especifiquemos el tipo de evento que se va a emitir
  @Output() onDebounce:EventEmitter<string> = new EventEmitter() //se ejecuta cuando el usuario deja de escribir

  debouncer: Subject<string> = new Subject(); //La idea es que se emita cuando se deja de escribir

  termino:string ="";

  buscar(){
    this.onEnter.emit(this.termino);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
