import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private _HttpClient:HttpClient) { }

  addtpcard(productId:string):Observable<any>{
    return this._HttpClient.post
    ('https://ecommerce.routemisr.com/api/v1/cart' , 
    {productId: productId})
  }

// get item heart
  addtowichlist(Id:any):Observable<any>{
    return this._HttpClient.post
    (`https://route-ecommerce.onrender.com/api/v1/wishlist`,
    {    productId: Id
    }
    )
    
    }

  

    
  getuserwish():Observable<any>{
return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist')

  }
  
  
    Remove(productId:string):Observable<any>
    {
      return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`)
    }
  
  }
  






