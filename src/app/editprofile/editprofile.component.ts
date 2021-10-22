import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Service/profile.service';
import { Login } from '../Models/Login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
msg:string="";
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

  constructor(private router: Router,private obj:ProfileService) { }
  // getCustomerById(userid:number):Observable<Login>
  // {
  //   return this.http.get<Login>(this.req+"/"+userid,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
  //     })
  //   });
  // }
  ngOnInit(): void {
    const uid:string|null=sessionStorage.getItem("uid");
    this.user.userid=Number(uid);
    this.obj.getCustomerById(Number(uid)).subscribe(data=>{
      this.user=data;
    })
  }
  put_api(userid:number,cus:Login):void{
   
    
    this.obj.EditCustomer(userid,cus).subscribe(
      data=>{

        this.msg="Update";
      }
    );
    console.log(this.msg);
    this.router.navigate(['/Viewprofile']);
  }
  navigate_back():void{
    this.router.navigate(['/Viewprofile']);
  }
}

