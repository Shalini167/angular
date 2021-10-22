import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  req:string="https://localhost:44356/api/Login";

  //req:string="https://jwtcloud.azurewebsites.net/api/Login";
  // req1:string="https://jwtcloud.azurewebsites.net/api/Login/CustomerDetail";

  req1:string="https://localhost:44356/api/Login/CustomerDetail";
 
  constructor(private http:HttpClient) { }
  Login(loginJWT:Login):Observable<any>
  {
    return this.http.post(this.req,loginJWT,
      {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
         'Access-Control-Allow-Method':'*',
         'Accept':'text/html,application/xhtml+xml, */*'
      }),responseType:'text'}      
    )}
    // FindUserId(log:Login):Observable<any>
    // {
    //   return this.http.post(this.req2,log,
    //   {
    //     headers:new HttpHeaders({
    //       'Content-Type':'application/json;charset=UTF-8',
    //       'Access-Control-Allow-Origin':'*',
    //       'Access-Control-Allow-Method':'*',
    //      'Accept':'text/html,application/xhtml+xml, */*'
    //     }),responseType:'text'}      
    //   )}
      
      getLoginDetails(cust:Login):Observable<Login>
      {
        return this.http.post<Login>("https://localhost:44356/api/Login/CustomerDetail",cust,
        {
          headers:new HttpHeaders(
            {
              'Content-Type':'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Method':'*'
            })
        })
      }
}

