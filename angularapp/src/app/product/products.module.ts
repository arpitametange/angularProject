import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from '../laptop/laptop.component';
import { TvComponent } from '../tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductComponent } from './product.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilityModule } from '../utility/utility.module';

const prodRoutes : Routes = [
  { path: '', component: ProductComponent, children: [ // localhost:4200/product
    {path : 'laptop', component: LaptopComponent},
    {path: 'tv', component: TvComponent},
    {path: 'mobile', component: MobileComponent},
    {path: 'washingmachine', component: WashingmachineComponent}
  ]},
]

@NgModule({
  declarations: [
    ProductComponent,LaptopComponent,
    MobileComponent,
    TvComponent,
    WashingmachineComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports: [RouterModule]
})
export class ProductsModule {
  constructor(){
    console.log('ProductsModule called');
    
  }
 }
