import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/servies/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){ }
isloding:boolean=false
msgerror:string='';


loginform: FormGroup=new FormGroup({
  email: new FormControl
  ('',[Validators.required,Validators.email]),
 password: new FormControl
 ('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{0,20}$/ )]),
})



loginform_fun():void{
  if(this.loginform.valid){
    this.isloding=true,
    this._AuthService.setLogin(this.loginform.value).subscribe ({
       next:(response)=>{  
        if(response.message=="success"){
          this.isloding=false
          localStorage.setItem('eToken',response.token)
          this._AuthService.de_codeusr()
          console.log(response)
this._Router.navigate(['/home'])
        }},


    error:(err:HttpErrorResponse)=>{
    this.msgerror=err.error.message
    this.isloding=false
    }
  })
  }
 else{
  this.loginform.markAllAsTouched()
 }
    
    }    
}
