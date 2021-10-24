import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  api_url=environment.api_url+'posts';
  photo_url=environment.api_url+'photos';
  userdata_url=environment.api_url+'users';


  constructor(private http:HttpClient) { }

  getData(arg:string){
    return this.http.get(environment.api_url+arg);
  }
  getProductData(arg:string){
    return this.http.get(environment.api_prod_url+arg);
  }
}
