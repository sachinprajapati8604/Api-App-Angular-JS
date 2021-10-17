import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  photoData:any;
  showLoader=true;
  constructor(private http: HttpClient ,private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.myservice.getData('photos').subscribe((data)=>{
      this.showLoader=false;
      this.photoData=data;
    })
  }

}
