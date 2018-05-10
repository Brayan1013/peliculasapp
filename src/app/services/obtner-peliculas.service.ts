import { Injectable } from '@angular/core';


import {Http, Jsonp} from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class ObtnerPeliculasService {

  //http://api.themoviedb.org/3/movie/500?api_key=aea1037f65a36f5b3214481e9bc68e31&append_to_response=credits,releases,images
  private apiKey:string = "aea1037f65a36f5b3214481e9bc68e31";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  //urlPrueba:string= "http://api.themoviedb.org/3/movie/337167?api_key=aea1037f65a36f5b3214481e9bc68e31&append_to_response=credits,releases,images";

  constructor( public _http: Http, public _jsonp: Jsonp) { }

  getPopulares(){
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this._jsonp.get(url).map(res=> res.json());
  }

  getPelicula(id:any){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&append_to_response=credits,releases,images&callback=JSONP_CALLBACK`;
    return this._jsonp.get( url ).map(respuesta=> respuesta.json());
  }


  buscarPelicula(nombre:string){
    let url = `${this.urlMoviedb}/search/movie?api_key=${this.apiKey}&query=${nombre}`;
    return this._http.get(url).map(respuesta=> respuesta.json());
  }

}
