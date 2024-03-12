import { authGuard } from './shared/guards/auth.guard';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './component/blank-layout/blank-layout.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { BradsComponent } from './component/brads/brads.component';
import { ProductsComponent } from './component/products/products.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { AuthLayoutComponent } from './component/auth-layout/auth-layout.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DetailsComponent } from './component/details/details.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AllorderComponent } from './component/allorder/allorder.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { ForgetpassComponent } from './component/forgetpass/forgetpass.component';
import { VerifycodeComponent } from './component/verifycode/verifycode.component';

const routes: Routes = [
  //blank layout
  
 { path:'' , canActivate:[authGuard] ,component:BlankLayoutComponent,
 children:[
  {path:"",component:HomeComponent },
  {path:"home",component:HomeComponent },

  {path:"cart",component:CartComponent },
  {path:"products",component:ProductsComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"allorders",component:AllorderComponent},
 {path:"checkout/:id",component:CheckoutComponent},
  {path:"brads",component:BradsComponent},
  { path:"details/:id",component:DetailsComponent},

  ]},
  //auth lyout login

  { path:'',component:AuthLayoutComponent,children:[
    {path:"login",component:LoginComponent },
    {path:"register",component:RegisterComponent },
    {path:"forgetpass",component:ForgetpassComponent},
    {path:"verifycode",component:VerifycodeComponent},


  
    ]},
  {path:'**',component:NotfoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
