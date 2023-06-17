import { Component, OnInit,VERSION, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Newuser } from '../model/template';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-template-drivenform',
  templateUrl: './template-drivenform.component.html',
  styleUrls: ['./template-drivenform.component.css']
})
export class TemplateDrivenformComponent implements OnInit {

//  regArry:any={}
 registerArray:any={}
Age:number;
  ngOnInit(): void {
  }
user:Newuser;
  arraycity:any=["Mumbai",'Kolkata','Delhi']
  defaultcity='Mumbai'
  genderArray:any=[{id:'1',value:'Male'},{id:'1',value:'Female'},{id:'3',value:'Other'}]
  defaultgender='Female'
  issubmit=false
  // patternng='^(?=.*?[A-Z])(?=?[a-z])(?=?[0-9]). {8,16}$'
  // reactiveForm!:FormGroup;
  OnSubmit(val:NgForm): void{
    // console.log(this.reactiveForm.value);
    
    this.issubmit=true
this.user=new Newuser()
this.user.age=val.value.age
this.user.city=val.value.city
this.user.gender=val.value.gender
this.user.password=val.value.password
this.user.confirmPassword=val.value.confirmPassword
this.user.firstName=val.value.firstName
this.user.lastName=val.value.lastName
this.user.email=val.value.email
this.user.phone=val.value.number
// alert(this.registerArray)
console.log(val);
val.reset()
val.controls['city'].setValue("Mumbai")
val.controls['gender'].setValue("Female")

// form.controls["course"].setValue("Angular");
//     form.controls["gender"].setValue("Male");
console.log(this.user);

  }

 
  
}


