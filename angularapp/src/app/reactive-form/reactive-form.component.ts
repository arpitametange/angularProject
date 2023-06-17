import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Observable } from 'rxjs/internal/Observable';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = [
    { id : '1', value: 'Male'},
    { id: '2', value: 'Female'}
  ]
  myReactiveForm: FormGroup;
  constructor( private fb: FormBuilder) { 
    this.createForm();
   
  }

  ngOnInit() {
    setTimeout(() => {
      this.myReactiveForm.setValue({
        'userDetails' : {
          'username' : 'Jack',
          'email': 'jack@gmail.com'
        },
        'course': 'HTML',
        'gender' : 'Female',
        'skills' : ['Azure']
      })
    }, 5000)

    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'course': 'JavaScript'
      })
    }, 5000)

  
  
  }
  isSubmitted:boolean=false
  createForm() {
    // this.myReactiveForm = new FormGroup({
    //   'userDetails' : new FormGroup({
    //     'username': new FormControl('', [Validators.required, this.NaNames.bind(this) ]) ,     
    //       'email': new FormControl('',[Validators.required, Validators.email,this.errormsg.bind(this)],this.NaEmails  ),
    //   }),     
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl('Male'),
    //   'skills': new FormArray(
    //     [
    //       new FormControl('', Validators.required)
    //     ]
    //   )
    // })
    this.myReactiveForm = this.fb.group({
      userDetails: this.fb.group({
        username: ['',  [Validators.required, this.NaNames.bind(this) ]],
        email: ['', [Validators.required, Validators.email], this.NaEmails ]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this.fb.array([])
     })
  }
  OnSubmit() {
    this.isSubmitted=true
    console.log('my reactive form ', this.myReactiveForm)
    
  }
  //validation
  notAllowedNames = ['Codemind', 'Technology'];
  NaNames(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value)  !== -1) {
      return { 'namesNotAllowed': true}
    }
    return null;
  }

  //this method addd or remove skills dyanamically on click
  OnAddSkills() {
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl('', Validators.required));
   }
   removeskills(): void{
    (<FormArray>this.myReactiveForm.get('skills')).removeAt(-1)
   }

   notall=['arpitametange@gmail']
   errormsg(control:FormControl){
    if(this.notall.indexOf(control.value)!==-1){
      return{'emailerror':true}
    }
    return null;
   }

   // This method will validate the email fileds 
  NaEmails(control: FormControl) : Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myResponse;
  }
}
