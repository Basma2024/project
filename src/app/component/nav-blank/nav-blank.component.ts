import { AuthService } from 'src/app/shared/servies/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent {
constructor(private _AuthService:AuthService){}
logout_user():void{
this._AuthService.logOut();
}
}
