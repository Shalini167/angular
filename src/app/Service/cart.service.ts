import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
 req:string="https://localhost:44329/api/Product";
 req1:string="https://localhost:44329/api/Product/GetCartById?id=";
  constructor(private http:HttpClient) { }
  getcartbyuserid(userid:number):Observable<any>{
    return this.http.get<any>(this.req+"/GetCartByUserId?Userid="+userid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  getcartbypid(pid:number):Observable<any>{
    return this.http.get<any>(this.req1+pid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  deletefromcart(id:number):Observable<any>
  {
   return this.http.delete<any>(this.req+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
