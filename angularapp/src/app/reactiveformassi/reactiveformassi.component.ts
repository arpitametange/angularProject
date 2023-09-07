import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, NgForm, Validators } from '@angular/forms';
import { Gender } from '../model/reactivegender';
import { passwordMatch } from './passwordMatch';

@Component({
  selector: 'app-reactiveformassi',
  templateUrl: './reactiveformassi.component.html',
  styleUrls: ['./reactiveformassi.component.css']
})
export class ReactiveformassiComponent implements OnInit {

  constructor() {
    this.clickevent()
   }

  ngOnInit() {
  }

  
  reactiveform:FormGroup;
  
  oncountrychange(event){
    console.log(event.dialCode);
    console.log(event.name);
    console.log(event.iso2);
    
    
    

  }

  selectedValue:string

  getselected(val){
    this.selectedValue==val.target.value
    
  }
  registerArray:any={}
  
// gender:Gender=[
//   {id:'1',value:'male'},
// {id:"2",value:'female'}]
  clickevent(){
    this.reactiveform=new FormGroup({
      'fullName':new FormControl("",Validators.required),
      'birthdate':new FormControl("",Validators.required),
      'gender':new FormControl("",Validators.required),
      'country':new FormControl("",Validators.required),
      'phone':new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
      'bio':new FormControl("",Validators.maxLength(256)),
       'userName':new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(25),Validators.pattern('^[a-zA-Z0-9]+$')]),
       'email':new FormControl("",[Validators.required,Validators.email,Validators.pattern('^(.+)@(.+)$'
        )]),
       'password':new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(10),Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*')]),
       'confirmPassoword':new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(10)
      ])

    }
    
      
    
    )
  }



  onsubmit(){
    console.log(this.reactiveform);
    
  }
//   countries = [
//     { name: "India", code: "+91" },
//     { name: "United States", code: "+1" },
//     { name: "Canada", code: "+1" },
//     { name: "United Kingdom", code: "+44" },
//     { name: "Germany", code: "+49" },
//     { name: "France", code: "+33" },
//     { name: "Australia", code: "+61" },
//     { name: "China", code: "+86" },
//     { name: "Brazil", code: "+55" },
//     { name: "Mexico", code: "+52" }
//   ];  
//   setCountry(){
//     let a=this.reactiveform.get('contact.country').value;
   
//    let code= this.countries.find((country)=>{
//       if(country.name == a)
//       {
//         return country.code;
//       }
//     })
//     this.reactiveform.patchValue({
//       'userDetails':{
//         'contact':{
//                   'phone':code.code+"-"
//         }
//       }
//     });
// }


}