import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { OrderComponent } from './order/order.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CodComponent } from './cod/cod.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { UpiComponent } from './upi/upi.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { AdminpdComponent } from './adminpd/adminpd.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';


export function tokenGet() {
  return localStorage.getItem("jwt");
}
export function UseridGet(){
  return localStorage.getItem("UID");
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
OrderComponent,
ProductdetailComponent,
SignupComponent,
CartComponent,
PaymentComponent,
CodComponent,
NetbankingComponent,
UpiComponent,
CardpaymentComponent,
AdminpdComponent,
AddproductComponent,
EditproductComponent,
ViewprofileComponent,
EditprofileComponent,
AdminComponent,
HomeComponent

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
