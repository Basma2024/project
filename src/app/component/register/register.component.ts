import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/servies/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})

export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){ }
isloding:boolean=false
msgerror:string='';
rigisterforms: FormGroup=new FormGroup({
  name: new FormControl
  (''),
  email: new FormControl
  ('',[Validators.required,Validators.email]),
 password: new FormControl
 ('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{0,20}$/ )]),
  rePassword: new FormControl
  ('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{0,20}$/ )]),
  phone:new FormControl
  ('',[Validators.required,Validators.pattern(/^0[0125][0-9]{9}$/ )]),
} ,{validators:[this.confirmpassword]} as FormControlOptions )


confirmpassword(group:FormGroup):void{
let password=group.get(`password`)
let repassword=group.get(`rePassword`)

if(repassword?.value==null){
repassword?.setErrors({required:true})

}
else if(password?.value!=repassword?.value){
  repassword?.setErrors({mismatch:true})
  }


}





registerforms_fun():void{
  this.isloding=true,
    this._AuthService.setregister(this.rigisterforms.value).subscribe ({
       next:(response)=>{  
        if(response.message=="success"){
this._Router.navigate(['/login'])
this.isloding=false
        }},

    error:(err:HttpErrorResponse)=>{
    this.msgerror=err.error.message
    this.isloding=false
    }
  })
    
    }    
}

