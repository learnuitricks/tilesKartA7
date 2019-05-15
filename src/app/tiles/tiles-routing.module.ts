import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TilesComponent } from './tiles.component';
import { TileDetailComponent } from './tile-detail.component';

const routes: Routes = [
  {path: 'tiles', component: TilesComponent},
  {path:"tiles/:Id",component:TileDetailComponent},

 {path:'**', redirectTo:'tiles'}

];
@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule] 
})
export class TilesRoutingModule { }
