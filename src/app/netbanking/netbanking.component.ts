import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PaymentService } from '../Service/payment.service';
@Component({
  selector: 'app-netbanking',
  templateUrl: './netbanking.component.html',
  styleUrls: ['./netbanking.component.css']
})
export class NetbankingComponent implements OnInit {
  msg:string="";
  uid:number=0;
  constructor(private router: Router,private obj: PaymentService) {}

  ngOnInit(): void {
  }
  getprice(){
    return sessionStorage.getItem("total");
    
  }
  orderpay():void{
    this.uid=Number(sessionStorage.getItem("uid"));
    // const uid:string|null=localStorage.getItem("uid");
    this.obj.postorderpay(this.uid).subscribe(data=>
    {
      this.msg="Added";
    });
    console.log(this.msg);
    this.router.navigate(['/Orderlist']);
  }
  navigate_back():void{
    this.router.navigate(['/payment']);
   }
}
