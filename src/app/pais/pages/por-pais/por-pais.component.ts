import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string = "";
  hayError:boolean = false;
  paises:Country[] = [];
  
  
  constructor(private paisService: PaisService) { } //Inyectamos el servicio
  
  buscar ( termino:string) {
    this.termino = termino
    this.hayError = false;
    //Para que un observable se dispare necesito por los menos tener un subscribe

    //Debemos recordar que el subscribe ahora solo recibe un argumento, por ello podemos crear un observable y luego enviarselo por argumento como está a continuacion:
    this.paisService.buscarPais(this.termino).subscribe( {
      next: resp => {
        this.paises = resp;
        console.log(resp)
        console.log(this.hayError)
      },
      error: err => {
        this.paises = [];
        this.hayError = true;
        console.log(this.hayError)
      }
    } )
  }
  
}
