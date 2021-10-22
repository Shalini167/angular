import { Component, OnInit } from '@angular/core';
import { Order } from '../Models/Order';
import { OrderService } from '../Service/order.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { getLocaleDateTimeFormat } from '@angular/common';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
order:Order[]=[];
userorder:Order[]=[];

user:Order=
  {
  orderid:0,
    userid:0,
    productid:0,
    productImage:"",
    productname:"",
    productDesc:"",
    price:0,
    dateofPurchase:""
    
  };
flag:boolean=false;
  constructor(private router: Router, private obj: OrderService,private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
    const uid:string|null=sessionStorage.getItem("uid");
    this.obj.getorderbyuserid(Number(uid)).subscribe(data=>
      {
        this.userorder=data;
      
        console.log(this.userorder);
        console.log()
      }
    );
   
  }
  get_api():void{
    this.obj.getAllOrder().subscribe(data=>
      {
        this.order=data;
        console.log(this.order);
      }
    );
  }
  getid_api(id:number):void
  {
    this.flag=true;
    this.obj.getOrdersById(id).subscribe(data=>
      {
        this.user=data;
        console.log(this.userorder);
      })
  }
  getorderbyuserid_api(userid:number):void{
    this.obj.getorderbyuserid(userid).subscribe(data=>
      {
        this.userorder=data;
        console.log(this.userorder);
      }
    );
    
  }
  navigate_back():void{
    this.router.navigate(['/Productdetail']);
  }
  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
