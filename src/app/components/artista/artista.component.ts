import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
   artista: any={};
   loadingArtista: boolean;
   topTracks: any []=[];
   band: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtista=true;
    this.router.params.subscribe(params => {
      this.getArtista( params ['id']);
      this.getTopTracks(params ['id']);
      console.log(params['id']);
    });
   }

   getArtista(id: string){
    this.loadingArtista=true;
    if(id ==="0")
    {
       this.band=false;
       this.loadingArtista=false;
    }
    else{
      this.band=true;
     this.spotify.getArtista(id).subscribe(artista =>{
       console.log(artista);
       this.artista=artista;
       this.loadingArtista=false;
       
     });
    }

   }

   getTopTracks(id: string){
    if(id ==="0"){
        this.band=false;
    }
    else{
      this.band=true;
    this.spotify.getTopTracks(id).subscribe(topTracks =>{
      console.log(topTracks);
      this.topTracks=topTracks;
    });
    }
   }

  ngOnInit(): void {
  }

}
