import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Models/Login';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  req:string="https://localhost:44325/api/Login";
  constructor(private http:HttpClient) { }
  postLogin(login:Login):Observable<any>
  {
    return this.http.post<any>(this.req+"/Signup",login,
      {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
         'Access-Control-Allow-Method':'*',
          
      })    
      })
  
}
}
