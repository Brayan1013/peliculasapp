import { Component, OnInit } from '@angular/core';
import {ObtnerPeliculasService} from '../../services/obtner-peliculas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  nombrePelicula:string='';
  peliculasObtenidas = [];

  constructor(public _obtener: ObtnerPeliculasService, public _navegar: Router) { }

  ngOnInit() {
  }

  buscar(){
    this._obtener.buscarPelicula(this.nombrePelicula).subscribe(data=>{
      //console.log(data); //results
      this.peliculasObtenidas= data.results;
      //console.log(this.peliculasObtenidas);
    })
  }

  navegar(id:string){
    this._navegar.navigate(['pelicula', id]);
  }
}
