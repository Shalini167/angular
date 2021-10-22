import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../Service/payment.service';
@Component({
  selector: 'app-cardpayment',
  templateUrl: './cardpayment.component.html',
  styleUrls: ['./cardpayment.component.css']
})
export class CardpaymentComponent implements OnInit {

  constructor(private router: Router,private obj:PaymentService) { }
msg:string="";
cardnumber:number|null=null;
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
  navigate_prodetail():void{
    this.router.navigate(['/Productdetail']);
  }
}
