import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  artistas: any[]=[];
  index: number;
  @Input() items: any[]=[];
  constructor(private spotify: SpotifyService, private router: Router) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    console.log(termino );
    if(termino !==""){
    this.spotify.getArtistas(termino)
    .subscribe( (data: any)=> {
      console.log(data); 
      this.artistas=data;
       this.index= this.artistas.findIndex(p => p.name === termino);
      if(this.index !== -1 ){
          this.verArtista(this.artistas[this.index]);
      }
      else{
        this.verArtista("0");
      }
    });
  }
  }
  verArtista(item: any){
    let artistaId;
   if(item !== "0"){
    if(item.type === 'artist'){
      artistaId=item.id;
    }
    else{
      artistaId = item.artists[0].id;
    }
  }
  else{
    artistaId="0";
  }
  
    //console.log(artistaId);
    this.router.navigate(['/artist', artistaId]);
  }
}
