import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productData:any;
showLoader=true
  constructor(private http:HttpClient , private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.myservice.getProductData('products').subscribe((data:any)=>{
      this.showLoader=false;
      this.productData=data.products;
    })
  }

}
