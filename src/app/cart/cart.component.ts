import { Component, OnInit } from '@angular/core';
import { AddtoCart } from '../Models/AddtoCart';
import { CartService } from '../Service/cart.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  delete:AddtoCart={
    cartid:0,
    userid:0,
  productid :0,
    productImage : "",
    productname :"",
    productDesc :"",
    price :0
  }
addtocart:AddtoCart[]=[];
msg:string="";
a:number=0;
//const amt:string|null=sessionStorage.getItem("total");
getprice(){
  for (var item of this.addtocart)
  {
    this.a+=item.price;
  }
  return this.a;
  
}
  constructor(private router: Router, private obj: CartService,private jwtHelper:JwtHelperService) { }
 
//   this.total+=this.postproduct.price;
//   const amt=this.total;
//  sessionStorage.setItem("total",amt.toString());
// tamt:number=0;
  ngOnInit(): void {
    const uid:string|null=sessionStorage.getItem("uid");
    console.log(uid);
    // this.addtocart.userid=Number(uid);
    this.obj.getcartbyuserid(Number(uid)).subscribe(data=>
      {
        this.addtocart=data;
        for (var item of data)
      {
         this.a+=item.price;
        }
        
        console.log(this.addtocart);
        
      }
    );
  }

  getcartbyuserid_api(userid:number):void{
    const uid:string|null=sessionStorage.getItem("uid");
    console.log(uid);
    // this.addtocart.userid=Number(uid);
    this.obj.getcartbyuserid(Number(uid)).subscribe(data=>
      {
        this.addtocart=data;
        console.log(this.addtocart);
      }
    );
  }
  deletecart_api(id:number):void{
    this.obj.deletefromcart(id).subscribe(data=>
      {

        this.msg="Deleted";
        
      });

      const amt:string|null=sessionStorage.getItem("total");
      this.obj.getcartbypid(id).subscribe(data=>
        {
          this.delete.price=data.price;
          console.log(this.delete.price);
          // console.log(data.price);
          var t = Number(amt);
           t=t-this.delete.price;
           console.log(t);
          sessionStorage.setItem("total",t.toString());
          
        });
    alert(this.msg);
    this.router.navigate(['/Productdetail']);
  }
  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwt");
    const uid:string|null=sessionStorage.getItem("uid");
    console.log(uid);
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  navigate_payment():void{
    this.router.navigate(['/payment']);
  }
  navigate_back():void{
    this.router.navigate(['/Productdetail']);
  }
}
