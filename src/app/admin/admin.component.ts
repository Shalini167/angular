import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email:string="";
  password:string="";
  constructor(private router:Router) { }
invalid:string="";
  ngOnInit(): void {
  }
  login(formdata:any):void
  {
    if(!(formdata.email=="admin@gmail.com"&&formdata.password=="password"))
    this.invalid="Invalid Username/Password";
    else
    {
      this.invalid="";
      this.router.navigate(['/adminpd']);
    }
  }
}
