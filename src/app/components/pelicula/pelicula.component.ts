import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ObtnerPeliculasService} from '../../services/obtner-peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  id:any;
  pelicula = {};

  constructor(public _activeroute:ActivatedRoute, public obtener:ObtnerPeliculasService) {

    this._activeroute.params.subscribe(respuesta=>{
      //console.log(respuesta['id']);
      this.id = respuesta['id'];
    })

   }

  ngOnInit() {
    this.obtener.getPelicula(this.id).subscribe(data=>{
      this.pelicula = data;
    //  console.log(this.pelicula);
    })
  }

}
