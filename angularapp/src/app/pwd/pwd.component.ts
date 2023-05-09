import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwd',
  templateUrl: './pwd.component.html',
  styleUrls: ['./pwd.component.css']
})
export class PwdComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  length=0
  password=''
  includesymbols=false
  includeLetters=false
  includeNumbers=false
  enterthelength(value:string){
    var parseValue=parseInt(value)
    if(!isNaN(parseValue)){
      this.length=parseValue
    }
  }

onChangeSymbol(){
  this.includesymbols=!this.includesymbols
}
onChangeLetters(){
  this.includeLetters=!this.includeLetters
}
onChangeNumbers(){
  this.includeNumbers=!this.includeNumbers
}
OnButtonClick(){
  const numbers = '1234567890';
  const  letters = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = '!@#$%^&*()';
  var validChar=''
  if (this.includeNumbers) {
    validChar+=numbers
  }
  if(this.includeLetters){
    validChar+=letters
  }
  if(this.includesymbols){
    validChar+=symbols
  }
  var generator=''
  for (let index = 0; index < this.length; index++) {
    let i=Math.floor(Math.random()*validChar.length)
    generator += validChar[i];
    
  }
  this.password=generator
}
}
