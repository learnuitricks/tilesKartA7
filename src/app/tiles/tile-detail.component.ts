import { Component, OnInit } from '@angular/core';
import { ITile } from '../itile';
import {ActivatedRoute, Router} from '@angular/router';
import { TileService } from '../services/tile.service';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {

  tile:ITile;
  imagePath:string = "assets/images/";
  constructor(private activateRoute:ActivatedRoute, private tileService:TileService, private _router:Router) { }

  ngOnInit() {
    let id = +this.activateRoute.snapshot.paramMap.get('Id');
    console.log(id);
    this.tileService.getTile(id).subscribe(
      (tile) =>{
        this.tile = tile;
      }
    )

    // make back end request to get the detail of the selected tile

 
  }

  navigateBack(): void {
    this._router.navigate(['/tiles']);
 }
 

}
