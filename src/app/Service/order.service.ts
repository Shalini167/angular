import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  req2:string="https://localhost:44374/api/Order/Paymentorder";
  req:string="https://localhost:44374/api/Order/OrderCart";
req1:string="https://localhost:44374/api/Order";
req3:string="https://localhost:44374/api/Order";
  getAllOrder():Observable<Order[]>
  {
    return this.http.get<Order[]>(this.req);
  
  }
  getOrdersById(id:number):Observable<Order>
  {
    return this.http.get<Order>(this.req1+"/GetCartByUserId?Userid="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  
  getorderbyuserid(userid:number):Observable<any>{
    return this.http.get<any>(this.req3+"/GetCartByUserId?Userid="+userid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  postorderpay(userid:number):Observable<any>
  {
    return this.http.post<any>(this.req2+"?id="+userid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}

