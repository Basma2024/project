import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/servies/card.service';
import { EcomdataService } from 'src/app/shared/servies/ecomdata.service';
import { WishlistService } from 'src/app/shared/servies/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent
//  implements OnInit
  {
constructor(private _WishlistService:WishlistService){}

dataheart:any[]=[]

addtowish(id:any):void{
  this._WishlistService.addtowichlist(id).subscribe({
    next:(response)=>{
  
      this.dataheart=(response.data)
      // this.dataheart=console.log(response.data)
    }
  })
  
  
  
  }
  

removeitem(id:string):void{
  this._WishlistService.Remove(id).subscribe({
    next:(response)=>{
      console.log(response.data)
this.dataheart=(response.data)
    },
error:(err)=>{
  console.log(err)
}
  })
}


ngOnInit(): void {
  this._WishlistService.getuserwish().subscribe({
next:(response)=>{
this.dataheart=(response.data)
console.log(response.data)
},
  })
}



addtocardd(id:string):void{
this._WishlistService.addtpcard(id).subscribe({
  next:(response)=>{
    console.log(response)
  }
})}


}










