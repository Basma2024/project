import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/servies/ecomdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute,private _EcomdataService :EcomdataService){}
details:product ={} as product;



detailslider: OwlOptions = {
  loop: true,
  mouseDrag:true,
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



ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
 let idoroduct:any=params.get('id');
this._EcomdataService.getid(idoroduct).subscribe({
  next:(response)=>{
  this.details=response.data

  }
})



    }
  })


}
}
