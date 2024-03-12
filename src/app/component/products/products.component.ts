import { ToastrService } from 'ngx-toastr';
import { product } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/servies/card.service';
import { EcomdataService } from 'src/app/shared/servies/ecomdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
constructor(private _EcomdataService:EcomdataService,private _CardService :CardService ,private _ToastrService:ToastrService ){}
products:any=''
searchterm:string=''


addproduct(Id:string):void{
  this._CardService.addtoCard(Id).subscribe({
    next:(response)=>{
      console.log(response) 
      this._ToastrService.success(response.message)},
      error:(err)=>{console.log(err)}
  })
}

// addproduct(Id:string):void{
//   this._CardServic.addtoCard(Id).subscribe({
// next:(response)=>{console.log(response) this._ToastrService.success(response.message)},
// error:(err)=>console.log(err)})

// }


ngOnInit(): void {
  // getproduct
  this._EcomdataService.getallproduct().subscribe({

    next:(response)=>{
this.products=response.data
    }
  })
}
}