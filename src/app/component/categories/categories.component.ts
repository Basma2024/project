import { Category, Subcategory } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { EcomdataService } from 'src/app/shared/servies/ecomdata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
constructor(private _EcomdataService:EcomdataService){}
category:any='';
Subcategoryitem:any[]=[]

Subcategory(id:any):void{
this._EcomdataService.getsubcatgory(id).subscribe({
  next:(response)=>{
   this.Subcategoryitem=(response.data)

  },
  error:(err)=>{
    console.log(err)
  }
})

}



ngOnInit(): void {
  this._EcomdataService.gettcategory().subscribe({
    next:(response)=>{
    this.category=response.data
    console.log(this.category)
    }
    
      })
    }
}

