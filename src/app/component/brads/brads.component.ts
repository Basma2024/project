import { EcomdataService } from 'src/app/shared/servies/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brads',
  templateUrl: './brads.component.html',
  styleUrls: ['./brads.component.css']
})
export class BradsComponent implements OnInit {
constructor(private _EcomdataService:EcomdataService, private _ActivatedRoute:ActivatedRoute){}
subbrand:any=''
brands:any[]=[]
ngOnInit(): void {
  this._EcomdataService.getbrands().subscribe({
    next:(response)=>{
      console.log(response.data)
this.brands=(response.data)
      
    }
  
  })
}


showbrand(id:string):void{
this._EcomdataService.getsubbrand(id).subscribe({
  next:(response)=>{
console.log(response.data)
this.subbrand=(response.data)
  }
})
}

}
