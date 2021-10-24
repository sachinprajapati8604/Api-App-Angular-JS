import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {
  searchKey="";
  userPostData:any;
  showLoader=true;
  page:number=1;
  totalLength:any;

  constructor(private http:HttpClient, private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.myservice.getData('posts').subscribe((data)=>{
      this.showLoader=false;
      this.userPostData=data;
      this.totalLength=this.userPostData.length;
      // console.log(this.totalLength);
    })
  }

}
