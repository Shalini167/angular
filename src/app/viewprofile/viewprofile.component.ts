import { Component, OnInit } from '@angular/core';
import { Login } from '../Models/Login';
import { Router } from '@angular/router';
import { ProfileService } from '../Service/profile.service';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  user:Login={
    userid:0,
    username:"",
    gender:"",
    age:0,
    address:"",
    email:"",
    phone:0,
    password:""
  };

  msg:string="";
  constructor(private router:Router, private obj: ProfileService) { }

  ngOnInit(): void {
    const uid:string|null=sessionStorage.getItem("uid");
    console.log(uid);
    this.obj.getCustomerById(Number(uid)).subscribe(data=>{
      this.user=data;
      console.log(this.user);
    })
  }
  getid_api(userid:number):void{
    const uid:string|null=sessionStorage.getItem("uid");
    console.log(uid);
    this.obj.getCustomerById(Number(uid)).subscribe(data=>{
      this.user=data;
      console.log(this.user);
    })
  }
  navigate_editprofile():void{
    this.router.navigate(['/Editprofile']);
  }
  navigate_back():void{
    this.router.navigate(['/Productdetail']);
  }
}
