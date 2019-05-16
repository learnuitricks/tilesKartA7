import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationGuard } from './authentication.guard';
import { AutheticationService } from './authetication-guard.service';
import { RegisterGuard } from './register/can-deactivateguard';

const appRoutes : Routes =  [
  {path:"login", component : LoginComponent},
  {path:"",pathMatch:"prefix", component:LoginComponent},
  {path:'register',component:RegisterComponent,canDeactivate:[RegisterGuard]},
  {path: "", canActivate:[AuthenticationGuard], children: [
  {path:'tiles',loadChildren: './tiles/tiles.module#TilesModule'},
  {path:'welcome',component:WelcomeComponent},
 ] },
 {path:"**", redirectTo:"login"}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
  ],

providers: [AuthenticationGuard,AutheticationService,RegisterGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}