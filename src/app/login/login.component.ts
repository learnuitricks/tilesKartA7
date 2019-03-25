import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string = '';
  passWord:string = '';
  showErrorMessage:boolean=false;
  constructor(private _routerService:Router) { }

  ngOnInit() {
  }

  login():void{
    if(this.userName ==""){
      // console.log("user name is required");
      window.alert('user name is required');
      this.showErrorMessage = true;
    }
else{this._routerService.navigate(['tiles']);}
  }
}
