import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../Models/ProductDetail';
import { Router } from '@angular/router';
import { ProductService } from '../Service/product.service';
import { AddtoCart } from '../Models/AddtoCart';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from '../Models/Login';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
productdetail:ProductDetail[]=[];
postproduct:AddtoCart={
    cartid:0,
    userid:0,
    productid:0,
    productImage:"",
    productname:"",
    productDesc:"",
    price:0,
  };
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
  msg:string="";
  uid:number;
  total:number=0;
  constructor(private router: Router, private obj:ProductService,private jwtHelper:JwtHelperService) {
    this.uid=0;
   }

  ngOnInit(): void {
    this.obj.getAllProductdetail().subscribe(data=>
      {
        this.productdetail=data;
        console.log(this.productdetail);
      }
    );
  }
  get_api():void{
    this.obj.getAllProductdetail().subscribe(data=>
      {
        this.productdetail=data;
        console.log(this.productdetail);
      }
    );
  }
  
  //  this.total={{getprice()}};
  getprice(){
    return sessionStorage.getItem("total");
    
  }
  post_api(id:number,img:string,name:string,pdesc:string,pprice:number):void{
    const uid:string|null=sessionStorage.getItem("uid");
    
    // console.log(Number(uid));
    // console.log(id,img,name,pdesc,pprice)
    // this.postproduct.cartid=0;
    // const amt=this.total;
     
    
    this.postproduct.userid=Number(uid);
    this.postproduct.productid=id;
    this.postproduct.productImage=img;
    this.postproduct.productname=name;
    this.postproduct.productDesc=pdesc;
    this.postproduct.price=pprice;
    this.total+=this.postproduct.price;
    
   
    const amt=this.total;
    sessionStorage.setItem("total",amt.toString());
    // const amt=this.total;
     
    // sessionStorage.setItem("total",amt.toString());
    console.log(this.postproduct);
  
    this.obj.postAddtoCart(this.postproduct).subscribe(data=>
      {
        
        this.msg="Product Added";
        
      });
      alert("Product Added");
      console.log(this.msg);
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
  navigate_profile():void{
    this.router.navigate(['/Viewprofile']);
  }
  navigate_cart():void{
    this.router.navigate(['/cartdetails']);
  }
  navigate_order():void{
    this.router.navigate(['/Orderlist']);
  }
  Logout():void{
    localStorage.removeItem("jwt");
    sessionStorage.removeItem("uid");
    this.router.navigate(['/Loginpage']);
  }
  // finduserid(logg:Login):void
  // {
  //   this.obj.FindUserId(logg).subscribe(data=>
  //     {
  //       this.uid=data;
  //       console.log(this.uid);
  //     }
  //   );
  // }
  // finduserid(logg:Login):void
  // {
  //   this.obj.FindUserId(logg).subscribe(data=>
  //     {
  //       this.userdetail=data;
  //       console.log(this.userdetail);
  //       console.log(this.userdetail.userid);
  //     }
  //   );
  // }
}
