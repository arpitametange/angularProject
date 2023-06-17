import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { AuthGuard } from './service/auth.guard';
import { PipeComponent } from './pipe/pipe.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes : Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'}, // localhost:4200
  {path: 'login', component: LoginComponent}, 
  { path: 'about-us', component: AboutusComponent}, // localhost:4200/about-us
  { path: 'contact-us', component: ContactusComponent},
  //for sigle router outlet
  // { path: 'product', children: [ // localhost:4200/product
  //   { path: '', component: ProductComponent},
  //   {path : 'laptop', component: LaptopComponent},
  //   {path: 'tv', component: TvComponent},
  //   {path: 'mobile', component: MobileComponent},
  //   {path: 'washingmachine', component: WashingmachineComponent}
  // ]},
  //
  {path: 'product', canActivate: [AuthGuard], loadChildren: './product/products.module#ProductsModule'}, 
   {path: 'womendress', loadChildren: './womendresses/dres.module#DresModule'},
  //  {path: 'addtocard', loadChildren: './addtocard/addcard.module#AddcardModule'},

  { path: 'posts', component: PostlistComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  {path:'pipe',component:PipeComponent},
  {path:'rxjs',component:RxjsComponent},
  { path: '**', component: PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('AppRoutingModule called');
    
  }
  
 }
