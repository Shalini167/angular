import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../Models/ProductDetail';
import { Router } from '@angular/router';
import { AdminService } from '../Service/admin.service';
@Component({
  selector: 'app-adminpd',
  templateUrl: './adminpd.component.html',
  styleUrls: ['./adminpd.component.css']
})
export class AdminpdComponent implements OnInit {
adminproduct:ProductDetail[]=[];
msg:string="";
  constructor(private router: Router,private obj:AdminService) { }

  ngOnInit(): void {
    this.obj.ListOfProducts().subscribe(data=>
      {
        this.adminproduct=data;
        console.log(this.adminproduct);
      }
    );
  }
  get_api():void{
    
    this.obj.ListOfProducts().subscribe(data=>
      {
        this.adminproduct=data;
        console.log(this.adminproduct);
      }
    );
  }
  delete_api(id:number):void
  {
    this.obj.deleteProduct(id).subscribe(data=>
      {
        this.msg="Deleted";
        
      });
    alert(this.msg);
    this.router.navigate(['/Addproduct']);
  }
  navigate_AddProduct():void{
    this.router.navigate(['/Addproduct']);
  }
  navigate_EditProduct(id:number,pro:ProductDetail):void{
console.log(id,pro);
const pid=id;
       
        sessionStorage.setItem("pid",pid.toString());
        console.log(pid);
    this.router.navigate(['/Editproduct']);
    
  }
  Logout():void{
    localStorage.removeItem("jwt");
    this.router.navigate(['/Loginpage']);
  }
}
