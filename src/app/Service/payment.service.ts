import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  req:string="https://localhost:44374/api/Order/Paymentorder";
  constructor(private http:HttpClient) { }
  postorderpay(userid:number):Observable<any>
{
  return this.http.post<any>(this.req+"?id="+userid,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
  
}

}
