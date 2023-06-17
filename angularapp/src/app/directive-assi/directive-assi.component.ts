import { Component, OnInit } from '@angular/core';
import { PersonArray } from '../array/array';



@Component({
  selector: 'app-directive-assi',
  templateUrl: './directive-assi.component.html',
  styleUrls: ['./directive-assi.component.css']
})
export default class DirectiveAssiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


selectedValue1:string
get(value){
console.log(value.target.value);
this.selectedValue1=value.target.value
}
selectedvalue2:string
get3(val): void{
  console.log(val.target.value);

  this.selectedvalue2=val.target.value
}
}
