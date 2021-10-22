import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../Service/payment.service';


@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UpiComponent implements OnInit {
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
      this.router.navigate(['/Orderlist']);
    });
    console.log(this.msg);
  }
  navigate_back():void{
    this.router.navigate(['/payment']);
   }
}
