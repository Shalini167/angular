import { Injectable } from '@angular/core';
import { Login } from '../Models/Login';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
// req:string="https://profilecloud.azurewebsites.net/api/Profile";
   req:string="https://localhost:44393/api/Profile";
  constructor(private http:HttpClient) { }
  getCustomerById(userid:number):Observable<Login>
  {
    return this.http.get<Login>(this.req+"/"+userid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  EditCustomer(userid:number,customer:Login):Observable<any>
  {
    return this.http.put<Login>(this.req+"?id="+userid,customer,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        }
      )
    })
  }

}
