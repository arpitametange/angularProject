import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password1',
  templateUrl: './password1.component.html',
  styleUrls: ['./password1.component.css']
})
export class Password1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  password=''
  includeNumbers=false;
  includeSymbols=false;
  includeLetters=false
  length=0;
  onchangeLength(value:string){
  const parsevalue=parseInt(value)
if(!isNaN(parsevalue)){
  this.length=parsevalue
} 
}
onChangeUseLetters(){
this.includeLetters=!this.includeLetters
}
onChangeUseNumbers(){
this.includeNumbers=!this.includeNumbers
}

onChangeUseSymbols(){
this.includeSymbols=!this.includeSymbols
}

onButtonClick(){
  const numbers = '1234567890';
  const  letters = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = '!@#$%^&*()';
   let validChar=""
  if (this.includeNumbers) {
    validChar+=numbers
  }
  if (this.includeLetters) {
    validChar+=letters
  }
  if(this.includeSymbols){
    validChar+=symbols
  }

  let generator="";
  for (let index = 0; index < this.length; index++) {
    const index=Math.floor(Math.random()* validChar.length)
    generator+=validChar[index]
    
  }
  this.password=generator
 }

}
