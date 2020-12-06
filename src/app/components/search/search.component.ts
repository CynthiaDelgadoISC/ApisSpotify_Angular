import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any[]=[];
  bandera: boolean;
  constructor(private spotify: SpotifyService) {}
 
  buscar(termino: string){
    if(termino !== ""){
    this.bandera= true;
    console.log(termino);
    this.spotify.getArtistas(termino)
    .subscribe( (data: any)=> {
      console.log(data); 
      this.artistas=data;
      this.bandera= false;
    });
  }
  }

  ngOnInit(): void {
  }

}
