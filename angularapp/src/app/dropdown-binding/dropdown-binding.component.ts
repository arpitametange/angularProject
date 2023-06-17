import { Component, OnInit } from '@angular/core';
import { DropdownnService } from '../dropdownn.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AddressObj } from '../module1/module1.module';

@Component({
  selector: 'app-dropdown-binding',
  templateUrl: './dropdown-binding.component.html',
  styleUrls: ['./dropdown-binding.component.css']
})
export class DropdownBindingComponent implements OnInit {
  // constructor(private serviceurl:DropdownnService) {
  

  //  }

   stateId:string = '';
  divisionId:string= '';
  districtId:string= '';
  talukaId:string = '';
  villageId:string = '';
  stateArry:any=[];
  divArry:any=[];
  addressObj:AddressObj;
  addressArr:AddressObj[]=[]
  constructor(private dropDwnService:DropdownnService) {
    this.addressObj=new AddressObj();
   }

  ngOnInit():void {
    this.GetState()
  // this.getAllAdress();

  }

  GetState(){
    this.dropDwnService.State().subscribe((res:any)=>{
     console.log('Get State',res);
      this.stateArry = res.responseData;
      })
  }

  GetDiv(stateId:any){

    // this.addressObj.stateName=getStateName(+stateId);
    // console.log(this.addressObj);
    
    
    // .subscribe((res:any)=>{
    // this.divArry=res.this.stateId
    // console.log(`Get Division`, this.divArry);
    // this.divArry=res.this.stateId

    // })
  }

  createtable(){
   let  data={
      onsubmit
    }
    this.dropDwnService.create(data).subscribe(()=>{

    })
  }

  OnSubmit(form:NgForm){
    console.log('Form',form.value);
    }
    editdata(){
    let data=this.dropDwnService.urlapi

      this.dropDwnService.edit(data,this.stateId).subscribe((res)=>{
      console.log(res);

      })
    }
}
