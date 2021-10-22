import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../Models/Order';
import { PaymentService } from '../Service/payment.service';
@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.css']
})
export class CodComponent implements OnInit {
payorder:Order[]=[];
msg:string="";
  constructor(private router: Router,private obj: PaymentService) { }

  ngOnInit(): void {
  }
  getprice(){
    return sessionStorage.getItem("total");
    
  }
orderpay():void{
  const uid:string|null=sessionStorage.getItem("uid");
  this.obj.postorderpay(Number(uid)).subscribe(data=>
  {
    this.msg="Added";
  });
  console.log(this.msg);
  this.router.navigate(['/Orderlist']);
}
navigate_back():void{
  this.router.navigate(['/payment']);
}
  // post_api(id:number,img:string,name:string,pdesc:string,pprice:number):void{
  //   console.log(id,img,name,pdesc,pprice)
  //   // this.postproduct.cartid=0;
  //   this.postproduct.userid=1004;
  //   this.postproduct.productid=id;
  //   this.postproduct.productImage=img;
  //   this.postproduct.productname=name;
  //   this.postproduct.productDesc=pdesc;
  //   this.postproduct.price=pprice;
  //   console.log(this.postproduct);
  //   this.obj.postAddtoCart(this.postproduct).subscribe(data=>
  //     {
        
  //       this.msg="Added";
        
  //     });
      
  //     console.log(this.msg);
  // }

//  }
}
