import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string  = "https://restcountries.com/v3.1"

  constructor(private http:HttpClient) { } //se inyecta el servicio aquí

  
  buscarPais (termino:string):Observable<Country[]> {  //Observable que emite un arreglo de pais
    const url = `${this.apiUrl}/name/${termino}`;

    //No queremos retornar la información dentro del servicio, para ello no le decimos subcribe todavía.
    //Quiero mandarle la información a quien sea que mandó a llamar la función buscarPais()
    //Aquí retornaremos un observable

    return this.http.get<Country[]>(url); //.pipe(catchError(err => of(["Hola mundo"]))) permite que podamos subscribirnos al observable desde otro componente
  //El get es un genérico entonces lo podemos poner entre diamantes
  }



}
