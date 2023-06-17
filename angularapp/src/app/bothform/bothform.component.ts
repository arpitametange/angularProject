import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { logging } from 'protractor';
import { AKrray } from '../array/both';

@Component({
  selector: 'app-bothform',
  templateUrl: './bothform.component.html',
  styleUrls: ['./bothform.component.css']
})
export class BothformComponent implements OnInit {
issubmit=false
  constructor() { 
    this.clickfun()
  }
array:AKrray
  ngOnInit() {
  }
  clickSubmit(val:NgForm){
  this.issubmit=true
console.log(val);
this.array=new AKrray()
this.array.name=val.name

// this.array.email=val.email
  }
chalo=false
  my1:FormGroup;
  clickfun(){
    this.my1=new FormGroup({
      'user1':new FormControl("",Validators.required),
      'email1':new FormControl("",[Validators.email, Validators.required])
    })
  }
  sub(){
    this.chalo=true

    console.log(this.my1);
    
  }
}
