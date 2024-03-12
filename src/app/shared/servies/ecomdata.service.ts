import { product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomdataService {

  constructor(private _HttpClient:HttpClient) { }

  // get product
  getallproduct():Observable<any>{
return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products`)

  }

  // idproduct
  getid(id:string):Observable<any>{
return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }

  // category
  gettcategory():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  }

  getsubcatgory(Id:string):Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories/${Id}/subcategories`)
  }
  

  getbrands():Observable<any>{
return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands`)


  }

getsubbrand(Id:string):Observable<any>{
return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands/${Id}`)

}




}
