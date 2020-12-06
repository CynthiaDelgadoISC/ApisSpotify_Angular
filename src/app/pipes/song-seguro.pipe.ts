import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'songSeguro'
})
export class SongSeguroPipe implements PipeTransform {

  constructor(private dom: DomSanitizer){
    
  }
  transform(value: string, url: string): any {
    return this.dom.bypassSecurityTrustResourceUrl(url + value);
  }

 

}
