import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tiles.component';
import { TileComponent } from './tile.component';
import { TileDetailComponent } from './tile-detail.component';
import { TilesRoutingModule } from './tiles-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationGuard } from '../authentication.guard';
import { Routes } from '@angular/router';
@NgModule({
  declarations: [TileComponent,TilesComponent,TileDetailComponent],
  imports: [
    CommonModule,
    TilesRoutingModule,FormsModule,HttpClientModule, SharedModule
  ],
  providers:[AuthenticationGuard]
})
export class TilesModule { }
