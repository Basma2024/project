import { Component, OnInit } from '@angular/core';
import {  product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/servies/ecomdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { CardService } from 'src/app/shared/servies/card.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/shared/servies/wishlist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private _EcomdataService:EcomdataService
  ,private _WishlistService:WishlistService ,private _CardServic:CardService ,private _ToastrService:ToastrService){}
products: product[]=[]
category:any[]=[]
adddatacard:any[]=[]
searchterm:string=''
wishlist:any[]=[]


// transform
categorysliderOptions: OwlOptions = {
  loop: true,
  mouseDrag:false,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  autoplay:true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: true
}
mainslider: OwlOptions = {
  loop: true,
  mouseDrag:true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
 items:1,
  nav: true
}

removeitem(id:string):void{
  this._WishlistService.Remove(id).subscribe({
    next:(response)=>{
      console.log(response.data)
this.wishlist=(response.data)
    },
error:(err)=>{
  console.log(err)
}
  })
}

addcard(Id:string):void{
  this._CardServic.addtoCard(Id).subscribe({
next:(response)=>{
console.log(response)
this._ToastrService.success(response.message)
},
error:(err)=>
console.log(err)
  })

}

getwishdata(id:any):void{
  this._WishlistService.addtowichlist(id).subscribe({
    next:(response)=>{
      console.log(response)
      this._ToastrService.success(response.message)
this.wishlist=response.data
    }
  })
  }

ngOnInit(): void {
  // getproduct
  this._EcomdataService.getallproduct().subscribe({

    next:(response)=>{
this.products=response.data
    }
  })




  // getcategory
  this._EcomdataService.gettcategory().subscribe({
next:(response)=>{
this.category=response.data
}

  })
}




 
}

