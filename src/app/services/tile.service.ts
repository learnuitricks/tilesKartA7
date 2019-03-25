import { Injectable } from '@angular/core';
import { ITile } from '../itile';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  tiles:Array<ITile> =[];
    
  tileURL:string = "http://demo5911200.mockable.io/tiles";
  constructor(private httpClient:HttpClient) { }

  getTiles(): Observable<Array<ITile>>{
    // we need to call back end api get the data and return that data.
   return this.httpClient.get<Array<ITile>>(this.tileURL);
    //return this.tiles;
  }

  getTile(Id:number):Observable<ITile>{

    return this.httpClient.get<ITile>(this.tileURL+`/${Id}`);

  }

  getFilteredTiles(filterOption,filterText,tiles:Array<ITile>):Array<ITile>{

    var fTiles:Array<ITile>;

    fTiles =  tiles.filter(function(tile){
        if(filterOption=="name"){
          if(tile.name.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase())>=0){
            return true;
          }
          else{
            return false;
          }
        }
    });
    return fTiles;
   } 
}