import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from 'src/app/shared/servies/card.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private _CardService:CardService){}

cartdetails:any={}

removeitem(id:string):void{
  this._CardService.Remove(id).subscribe({
    next:(response)=>{
this.cartdetails=(response.data)
    },
error:(err)=>{
  console.log(err)
}
  })
}

updateitem(id:string , count:number):void{
if(count>0){
  this._CardService.update(id , count).subscribe({
    next:(response)=>{
      
  this.cartdetails=response.data
    },
    error:(err)=>{
  console.log(err)
    }
  })
  

}
}


ngOnInit(): void {
  this._CardService.getusercard().subscribe({
next:(response)=>{
  this.cartdetails=response.data

},
  })
}


}
