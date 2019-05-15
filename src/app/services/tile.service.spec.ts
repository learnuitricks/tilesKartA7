import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { TileService } from './tile.service';

fdescribe('TileService', () => {
 beforeEach(() => TestBed.configureTestingModule({
   providers:[TileService],
    imports:[HttpClientTestingModule]
 }));

 it('should be created', () => {
   const service: TileService = TestBed.get(TileService);
   expect(service).toBeTruthy();
 });



it('should filter the tiles based on the name passed', () => {
   const tileService: TileService = TestBed.get(TileService);
   const tiles=[
     {
       name: 'nitco',
       model: 'nit-01',
       price: 200,
       rating: 2,
       image: 'tile1.jpg',
       status: 1,
       Id: 1
     },
     {
       name: 'somany',
       model: 'nit-03',
       price: 150,
       rating: 1,
       image: 'tile3.jpg',
       status: 1,
       Id: 3
     }
   ];
   const filteredArray = tileService.getFilteredTiles("name","som",tiles);
   expect(filteredArray.length).toBe(1);
  
 });


 it('get tiles should call the http get request',inject([HttpTestingController, TileService],(httpMock:HttpTestingController,tileService:TileService)=>{
  
   tileService.getTiles().subscribe((tiles)=>{
       expect(tiles.length).toBe(2);
   })

   const tileData =[{"name":"somany","model":"nit-01","price":200,"rating":2,"image":"tile1.jpg","status":1,"Id":1},
   {"name":"johnson","model":"nit-02","price":100,"rating":4,"image":"tile2.jpg","status":0,"Id":2}];
  
   const req = httpMock.expectOne('http://demo5911200.mockable.io/tiles');
   expect(req.request.method).toEqual('GET');

   req.flush(tileData);
   httpMock.verify();
 })
 );

});





