import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private  _HttpClient:HttpClient) { }

  addtoCard(productId:string):Observable<any>{
    return this._HttpClient.post
    ('https://ecommerce.routemisr.com/api/v1/cart' , 
    {productId: productId})
  }

  getusercard():Observable<any>{
return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart')

  }


  Remove(productId:string):Observable<any>
  {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`)
  }


  checkoutid(cardId:string,userdata:object):Observable<any>{
    return this._HttpClient.post
    (`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=http://localhost:4200`,
    
    {
      shippingAddress:userdata
  }
    )
  }

update(idproduct:string , newcount:number):Observable<any>{
return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${idproduct}`,
{
  count:newcount
})
}

allorder(userid:string):Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/${userid}`)
}

}
