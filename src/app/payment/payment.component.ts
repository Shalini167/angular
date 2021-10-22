import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 navigate_cod():void{
  this.router.navigate(['/cod']);
 }
 navigate_netbanking():void{
  this.router.navigate(['/netbanking']);
 }
 navigate_upi():void{
  this.router.navigate(['/upi']);
 }
 navigate_cardpayment():void{
  this.router.navigate(['/cardpayment']);
 }
 navigate_back():void{
  this.router.navigate(['/cartdetails']);
 }
}
