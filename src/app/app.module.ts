import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { BradsComponent } from './component/brads/brads.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { DetailsComponent } from './component/details/details.component';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule}from "@angular/common/http";
import { NavBlankComponent } from './component/nav-blank/nav-blank.component';
import { NavAuthComponent } from './component/nav-auth/nav-auth.component';
import { AuthLayoutComponent } from './component/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './component/blank-layout/blank-layout.component';
import { BrowserAnimationsModule  }from "@angular/platform-browser/animations"
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BuyPipe } from './buy.pipe';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AllorderComponent } from './component/allorder/allorder.component';
import { MyHttpInterceptor } from './my-http.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { LodingInterceptor } from './loding.interceptor';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { ForgetpassComponent } from './component/forgetpass/forgetpass.component';
import { VerifycodeComponent } from './component/verifycode/verifycode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    BradsComponent,
    LoginComponent,
    RegisterComponent, 
    FooterComponent,
    NotfoundComponent,
    DetailsComponent,
    NavBlankComponent,
    NavAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    BuyPipe,
    SearchPipe,
    CheckoutComponent,
    AllorderComponent,
    WishlistComponent,
    ForgetpassComponent,
    VerifycodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule  ,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    {provide :HTTP_INTERCEPTORS ,useClass :MyHttpInterceptor ,multi:true},
    {provide:HTTP_INTERCEPTORS ,useClass:LodingInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
