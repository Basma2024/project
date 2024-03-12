import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }
userdata:any
de_codeusr(){
  if(localStorage.getItem('eToken')!=null  ){
    let decode:any=localStorage.getItem('eToken')
    let encodeuser=jwtDecode(decode)
this.userdata=encodeuser
console.log(encodeuser)
  }
}
logOut():void{
  localStorage.removeItem('eToken'),
  this._Router.navigate(['/login'])

}

    setregister(userdata:object):Observable <any>{
      return this._HttpClient.post
      (`https://ecommerce.routemisr.com/api/v1/auth/signup`,userdata)
    }
    setLogin(userdata:object):Observable <any>{
      return this._HttpClient.post
      (`https://ecommerce.routemisr.com/api/v1/auth/signin`,userdata)
    }



    forgetpas():Observable<any>{
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords` ,
      {
        email:"ahmedmutti@gmail.com"
    })
      }



  }

