import { Injectable } from '@angular/core';
import { ProductDetail } from '../Models/ProductDetail';
import {Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AddtoCart } from '../Models/AddtoCart';
import { Login } from '../Models/Login';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   req:string="https://localhost:44329/api/Product";
  // req:string="https://productapi7.azurewebsites.net/api/Product";
  req1:string="https://localhost:44356/api/Login/CustomerDetail";
  req2:string="https://localhost:44325/api/Login/Getuserid";
  constructor(private http:HttpClient) { }
  getAllProductdetail():Observable<ProductDetail[]>
  {
    return this.http.get<ProductDetail[]>(this.req);
  }

  postAddtoCart(a:AddtoCart):Observable<any>
  {
    return this.http.post<any>(this.req,a,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  FindUserId(log:Login):Observable<any>
  {
      return this.http.post(this.req2,log,
      {
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*',
         'Accept':'text/html,application/xhtml+xml, */*'
        }),responseType:'text'}      
  )}
}
