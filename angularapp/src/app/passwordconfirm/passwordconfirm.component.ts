import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { _MatCheckboxRequiredValidatorModule } from '@angular/material';

@Component({
  selector: 'app-passwordconfirm',
  templateUrl: './passwordconfirm.component.html',
  styleUrls: ['./passwordconfirm.component.css']
})
export class PasswordconfirmComponent implements OnInit {

  constructor() { 
    this.createform()
  }

  ngOnInit() {
  }
myreactiveform:FormGroup
createform(){
  this.myreactiveform=new FormGroup({
    'passowrd':new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10),Validators.pattern['(?=.*\d)(?=.\[a-z])(?=.*\[A-Z]).*']]),
    'confirm':new FormControl('',[Validators.required,Validators.required,Validators.minLength(5),Validators.maxLength(10)])
  })
}

onsubmit(){

console.log(this.myreactiveform
  );
}
}
