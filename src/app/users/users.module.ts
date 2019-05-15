import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { UsersRoutingModule } from './users-routing.module';
import {RouterModule,Routes} from '@angular/router';

const appRoutes : Routes =  [
  {path:"register", component : RegisterComponent},
 ]
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
