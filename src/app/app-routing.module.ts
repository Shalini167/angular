import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpdComponent } from './adminpd/adminpd.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { CartComponent } from './cart/cart.component';
import { CodComponent } from './cod/cod.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SignupComponent } from './signup/signup.component';
import { UpiComponent } from './upi/upi.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

const routes: Routes = [
{path:'Orderlist',component:OrderComponent},
  {path:'Loginpage',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'Productdetail',component:ProductdetailComponent},
  {path:'cartdetails',component:CartComponent},
  {path:'payment',component:PaymentComponent},
  {path:'cod',component:CodComponent},
  {path:'netbanking',component:NetbankingComponent},
  {path:'upi',component:UpiComponent},
  {path:'cardpayment',component:CardpaymentComponent},
  {path:'adminpd',component:AdminpdComponent},
  {path:'Addproduct',component:AddproductComponent},
  {path:'Editproduct',component:EditproductComponent},
  {path:'Viewprofile',component:ViewprofileComponent},
  {path:'Editprofile',component:EditprofileComponent},
  {path:'admin',component:AdminComponent},
  {path:'homepage',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
