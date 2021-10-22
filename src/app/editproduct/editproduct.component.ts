import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../Models/ProductDetail';
import { Router } from '@angular/router';
import { AdminService } from '../Service/admin.service';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  admin:ProductDetail={
    productid :0,
    productImage : "",
    productname :"",
    productDesc :"",
    price :0
  }
  msg:string="";
  constructor(private router: Router,private obj:AdminService) { }

  ngOnInit(): void {
    const pid:string|null=sessionStorage.getItem("pid");
    console.log(pid);   
    this.admin.productid=Number(pid);
    // console.log(this.admin.productid);
    this.obj.getProductsbyid(Number(pid)).subscribe(
      data=>{
        this.admin=data;
      }
    )
    // this.admin.productImage=pro.productImage;
    // this.admin.productname=pro.productname;
    // this.admin.productDesc=pro.productDesc;
    // this.admin.price=pro.price;
  }
  put_api(id:number,pro:ProductDetail):void
  {
    
    this.obj.putProduct(id,pro).subscribe(
      data=>{
        //const pid=data.productid;
       
        // localStorage.setItem("pid",pid.toString());
        // console.log(pid);
        this.msg="Updated"
      }
    );
    console.log(this.msg);
    this.router.navigate(['/adminpd']);
  }
  
  navigate_back():void{
    this.router.navigate(['/adminpd']);
  }
}
