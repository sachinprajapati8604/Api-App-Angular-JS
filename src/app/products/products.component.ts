import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  searchKey="";
  prod:any;
  api_url:String ='';
  showLoader=true;
  totalLength:any;
  page=1;

  constructor(private http:HttpClient, private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.api_url=environment.api_prod_url;
    this.myservice. getProductData("products").subscribe((data:any)=>{
      this.showLoader=false
      // console.log(data);
      this.totalLength=data.length;
      // console.log(this.totalLength)
      this.prod=data;
        
    })
  }

}
