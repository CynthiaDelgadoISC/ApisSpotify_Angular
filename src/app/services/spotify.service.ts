import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("Service spotify listo");
  }

  getQuery(query: string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers= new HttpHeaders({'Authorization': 'Bearer BQBaUHBlmzmWauL38l7B9f-ypV-UVVfuu2G2SHkpGj18KGDQyeIeIeywxWs7HY_ZkunsI2c9Sftg7RF5yJo'});
    return this.http.get(url, {headers});
  }


  getNewRelease(){
    return this.getQuery('browse/new-releases')
    .pipe(map( data => data['albums'].items));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=5`)
    .pipe(map( data =>data['artists'].items));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
    //.pipe(map( data =>data['artists'].items));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe(map (data => data['tracks']));
  }
}
