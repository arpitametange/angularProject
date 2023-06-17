import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component implements OnInit {
reactive2:FormGroup;
  constructor() { 
    this.eventclick()
  }

  ngOnInit() {
  }
  eventclick(){
    this.reactive2=new FormGroup({
    'userDetails':new FormGroup({
      'user':new FormControl("",[Validators.required,this.createcustom.bind(this)]),
      'lastName':new FormControl('metange',Validators.required)
    }),
      'email':new FormControl('',[Validators.required, Validators.email]),
      'password':new FormControl("",[Validators.required]),
      'gender':new FormControl('Female'),
      'course':new FormControl('angular'),
      'skills':new FormArray([
              new FormControl("")
      ]),
      "names":new FormArray([
        new FormControl("")
])
      
    })

}
gender=[{id:'1',value:'male'},
        {id:'2', value:'Female' }  ]
        isSubmitted:boolean=false
onsubmit(){
  this.isSubmitted=true
  console.log(this.reactive2);
  }
  course=['angular','react','java']
onAddSkils(){
  (<FormArray>this.reactive2.get('skills')).push(new FormControl(""))

}
removeSkills(){
  (<FormArray>this.reactive2.get("skills")).removeAt(-1)
}

addnames(){
  (<FormArray>this.reactive2.get('names')).push(new FormControl(""))
}
removenames(){
  (<FormArray>this.reactive2.get('names')).removeAt(-1)
}
notallowed=['arpita','ARPITA','Arpita']
createcustom(control:FormControl){
  if (this.notallowed.indexOf(control.value)!==-1) {
    return {'notallowedvalue':true}
  }
  return null
  
}
}
