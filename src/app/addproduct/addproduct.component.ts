import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../Models/ProductDetail';
import { Router } from '@angular/router';
import { AdminService } from '../Service/admin.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private router: Router,private obj:AdminService) { }
  postproduct:ProductDetail={
    productid :0,
    productImage : "",
    productname :"",
    productDesc :"",
    price :0
  }
  msg:string="";
  ngOnInit(): void {
  }
  post_api(pro:ProductDetail):void{
    this.postproduct=pro;
    console.log(pro);
    this.obj.postProduct(this.postproduct).subscribe(data=>
      {
        this.msg="Added"
      });
      console.log(this.msg);
      this.router.navigate(['/adminpd']);
  }
  navigate_back():void{
    this.router.navigate(['/adminpd']);
  }
}
