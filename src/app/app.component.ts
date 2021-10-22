import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pharmproj';
  constructor(public router: Router,private jwtHelper:JwtHelperService) {}
  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwt");
    const uname:string|null=sessionStorage.getItem("uname");
    
    console.log(uname);
   
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  getname(){
    return sessionStorage.getItem("uname")
     }
  navigate_home():void{
    this.router.navigate(['/homepage']);
  }
  navigate_profile():void{
    this.router.navigate(['/Viewprofile']);
  }
  navigate_cart():void{
    this.router.navigate(['/cartdetails']);
  }
  navigate_order():void{
    this.router.navigate(['/Orderlist']);
  }
  navigate_prod():void{
    this.router.navigate(['/Productdetail']);
  }
  
  Logout():void{
    localStorage.removeItem("jwt");
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("total");
    this.router.navigate(['/Loginpage']);
  }
}
