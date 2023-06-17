import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Assi } from '../model/userAssi';


@Component({
  selector: 'app-template-fassi',
  templateUrl: './template-fassi.component.html',
  styleUrls: ['./template-fassi.component.css']
})
export class TemplateFAssiComponent implements OnInit {
  isSubmitted=false
  constructor() { }
  ngOnInit() {
  }
  user1:Assi
  funform(val:NgForm):void{
    this.isSubmitted=true
    this.user1=new Assi();
    this.user1.address=val.value.adressBoth.address
    this.user1.address1=val.value.adressBoth.address2
    this.user1.city=val.value.adressBoth.city
    this.user1.email=val.value.adressBoth.email
    this.user1.zip=val.value.adressBoth.zip
    this.user1.mobile=val.value.adressBoth.mobile
    this.user1.state=val.value.adressBoth.state
    this.user1.password=val.value.adressBoth.password
    this.user1.gender=val.value.gender
console.log(val);
val.reset()
val.control['state'].setValue('Maharashtra')
console.log(this.user1);
  }
  state:any=['kanataka','harayana','Maharashtra']
  defaultstate='Maharashtra'
  gender=[{id:'1',value:'Male'},
  {id:'2',value:'Female'},
  {id:'3',value:'other'}]
  defaultgender='Female'





  
}
