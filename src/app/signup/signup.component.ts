import { Component, OnInit } from '@angular/core';
import { Login } from '../Models/Login';
import { Router } from '@angular/router';
import { SignupService } from '../Service/signup.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  login:Login[]=[];
  user:Login={
    userid:0,
    username:"", 
    gender :"", 
    age:null,
    address:"",   
    email:"", 
    phone :null, 
    password:""   
    }
    postuser:Login={
      userid:0,
      username:"", 
      gender :"", 
      age:0,
      address:"",   
      email:"", 
      phone :null, 
      password:""      
      }
  constructor(private router:Router,private obj:SignupService,private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
  }
  post_api(logg:Login):void{
    this.obj.postLogin(logg).subscribe(data=>
      {
         console.log("added");
      })
      this.router.navigate(['/Loginpage']);
  }
  navigate_login():void{
    this.router.navigate(['/Loginpage']);
  }
}
