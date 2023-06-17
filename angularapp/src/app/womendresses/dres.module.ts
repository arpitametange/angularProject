import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagsComponent } from './bags/bags.component';
import { JumpsuitComponent } from './jumpsuit/jumpsuit.component';
import { WomendressesComponent } from './womendresses.component';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
const dressrout:Routes=[
{path:'',component:WomendressesComponent,children:[
  {path:'jumpsuit',component:JumpsuitComponent},
  {path:'bags',component:BagsComponent},
  {path:'pagelist',component:PageListComponent}

]}
]


@NgModule({
  declarations: [ WomendressesComponent,
    JumpsuitComponent,
    BagsComponent,
    PageListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dressrout)
  ],
  exports:[
    RouterModule
  ]
})
export class DresModule {
  constructor(){
    console.log('dress module');
    
  }
 }
