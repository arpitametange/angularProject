import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
 
  constructor() { }
  courseArr : string [] = [
    'Angular', 'HMTL', 'JavaScript'
  ]
  ngOnInit() {
  }
  isSubmitted=false
 user:User;
//  @ViewChild ('myform',{static:false}) public resetForm:NgForm;
a
//  resetMethod(myForm){
//   myForm.reset()
//  }
  OnSubmit(form: NgForm): void {
    this.isSubmitted = true;
    console.log('my template form values', form);
    this.user = new User();
    this.user.userName = form.value.userDetail.username;
    this.user.email = form.value.userDetail.email;
    this.user.course = form.value.course;
    this.user.gender = form.value.gender;
    form.reset(this.user)
    form.controls["course"].setValue("Angular");
    form.controls["gender"].setValue("Male");
    console.log('After bind value to User Object', this.user);
//   this.resetMethod({
//   defaultCourse:"Angular",
//   defaultGenderValue:'Male'
// });
    // api/ saveuserData(user: User); // api endpoint 
  }
  genders = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  defaultGenderValue= 'Male';
  defaultCourse="Angular"

}