import { Component, OnInit } from '@angular/core';
import { Login } from '../Models/Login';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login[]=[];
user:Login={
userid:0,
username:"", 
gender :"", 
age:0,
address:"",   
email:"", 
phone :0, 
password:""   
}
userdetail:Login={
  userid:0,
  username:"", 
  gender :"", 
  age:0,
  address:"",   
  email:"", 
  phone :0, 
  password:""   
  }
postuser:Login={
userid:0,
username:"", 
gender :"", 
age:0,
address:"",   
email:"", 
phone :0, 
password:""      
}
uid:number;
invalid:string="";
  constructor(private obj :LoginService,private router:Router) { 
this.uid=0;
  }
 
  ngOnInit(): void {
  } 
  post_api(logg:Login):void{
    this.obj.getLoginDetails(logg).subscribe(
      data=>
      {
        const uid=data.userid;
        const uname=data.username;
        sessionStorage.setItem("uname",uname);
        sessionStorage.setItem("uid",uid.toString());
        console.log(uid);
        console.log(uname);
        // this.router.navigate(['/Productdetail']);
        
      }
    )
    this.obj.Login(logg).subscribe(data=>{
       const token=data
       localStorage.setItem("jwt",token);
     
       if(logg.email=="admin@gmail.com" && logg.password=="admin"){
         
        this.router.navigate(['/adminpd']);
       }
       else if(!(logg.email=="admin@gmail.com" && logg.password=="admin")){
        this.router.navigate(['/Productdetail']);
       }
      //  else if((&&)){
      //   this.invalid="Invalid Email/Password";
      //  }
    });
    // this.obj.getLoginDetails(logg).subscribe(
    //   data=>
    //   {
    //     const uid=data.userid;
    //     const uname=data.username;
    //     sessionStorage.setItem("uname",uname);
    //     sessionStorage.setItem("uid",uid.toString());
    //     console.log(uid);
    //     console.log(uname);
    //     this.router.navigate(['/Productdetail']);
        
    //   }
    // )
  }
  
  // finduserid(logg:Login):void
  // {
  //   this.obj.FindUserId(logg).subscribe(data=>
  //     {
        // Number uid=this.userdetail.userid
        //this.uid=data;
        // sessionStorage.setItem('uid',data.userid);
        // var data1=sessionStorage.getItem('uid');
        // console.log(Number(data1));
  
        //console.log(this.uid);
        // console.log(this.userdetail.userid);
  
  //     }
  //   );
  // }

  navigate_Signup():void{
    this.router.navigate(['/Signup']);
  }
  // Logout():void{
  //   localStorage.removeItem("jwt");
  //   this.router.navigate(['/Loginpage']);
  // }

  // post_api(login:Login):void
  // {
  //   console.log(login);
  //   this.obj.Login(login).subscribe(data=>
  //     {
  //       const token=data;
  //       localStorage.setItem("jwt",token);      
  //       this.router.navigate(['/Orderlist']);
  //     })
  // }
  
}
