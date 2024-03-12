import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/shared/servies/card.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
constructor(private _FormBuilder:FormBuilder,
  private _CardService:CardService,private _ActivatedRoute:ActivatedRoute){}
checkout:FormGroup=this._FormBuilder.group({
  details:[''],
  phone:[''],
  city:['']
})

handelform():void{
this._CardService.checkoutid(this.cardid ,this.checkout.value).subscribe({
next:(response)=>{
if(response.status=='success'){
window.open(response.session.url,'_self')
}

}

})
}
cardid:any=''

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
  
next:(params)=>{
this.cardid=(params.get('id'))
}

  })
}



}
