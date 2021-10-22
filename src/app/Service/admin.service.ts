import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from '../Models/ProductDetail';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  req:string="https://localhost:44373/api/Admin";
  // req:string="https://adminapi7.azurewebsites.net/api/Admin";
  // req:string="https://productapi7.azurewebsites.net/api/Product";
  // req1:string="https://localhost:44373/api/Admin?id=";
  constructor(private http:HttpClient) { }
  ListOfProducts():Observable<ProductDetail[]>
  {
    return this.http.get<ProductDetail[]>(this.req);
}
postProduct(product:ProductDetail):Observable<any>
  {
    return this.http.post<ProductDetail>(this.req,product,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }
  putProduct(id:number,product:ProductDetail):Observable<any>
  {
    
    return this.http.put<ProductDetail>(this.req+"?id="+id,product,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        }
      )
    })
  }
deleteProduct(id:number):Observable<any>
  {
   return this.http.delete<any>(this.req+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  getProductsbyid(productid:number):Observable<ProductDetail>
  {
    return this.http.get<ProductDetail>(this.req+"/"+"GetbyId?id="+productid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}

  

  