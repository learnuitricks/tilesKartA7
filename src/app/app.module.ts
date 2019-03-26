import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { StatusPipe } from './pipes/status.pipe';
import { FormsModule } from '@angular/forms';
import { TileComponent } from './tiles/tile/tile.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { StarComponent } from './star/star/star.component';
import {RouterModule,Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TileDetailComponent } from './tile-detail/tile-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

const appRoutes : Routes =  [
  {path:"login", component : LoginComponent},
  {path:"tiles", component : TilesComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:"tiles/:Id",component:TileDetailComponent},
  {path:"register", component : RegisterComponent},
  {path:"",pathMatch: 'prefix', redirectTo:"tiles"},
  {path:"**", redirectTo:"login"}
 ]

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    StatusPipe,
    TileComponent,
    LoginComponent,
    StarComponent,
    WelcomeComponent,
    TileDetailComponent,
    RegisterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}