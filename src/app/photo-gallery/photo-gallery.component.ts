import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  searchKey="";
  photoData:any;
  showLoader=true;
  totalLength:any;
  page:number=1;
  constructor(private http: HttpClient ,private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.myservice.getData('photos').subscribe((data)=>{
      this.showLoader=false;
      this.photoData=data;
      this.totalLength=this.photoData.length;
    })
  }

}
