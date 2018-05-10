import { Component, OnInit } from '@angular/core';

import {ObtnerPeliculasService} from '../../services/obtner-peliculas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  populares:any[]=[];

  constructor( public _ob: ObtnerPeliculasService, public _router:Router) {
this._ob.getPopulares().subscribe(data=>{
  this.populares = data.results;
  //console.log(this.populares);
})



   }

  ngOnInit() {

  }

  navegar(id:string){
    this._router.navigate(['/pelicula', id]);

  }

}
