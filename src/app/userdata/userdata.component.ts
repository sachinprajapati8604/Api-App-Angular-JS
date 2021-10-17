import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  userData:any;
  showLoader=true;
  
  constructor(private http: HttpClient, private myservice : MyserviceService) { }

  ngOnInit(): void {
    this.myservice.getData('users').subscribe((data)=>{
      this.showLoader=false;
      this.userData=data;
    })
  }

}
