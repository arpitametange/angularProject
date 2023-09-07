import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from './userpractice';
import { emit } from 'process';

@Component({
  selector: 'app-practiceform',
  templateUrl: './practiceform.component.html',
  styleUrls: ['./practiceform.component.css']
})
export class PracticeformComponent implements OnInit {
  user:User
  isSubmitted=false;

  arrray=[{
    name:'arpita',
    id:13
  },
  {
    name:'arpi',
    id:12
  },
  {
    name:'arpii',
    id:11
  }]

  genders = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]

  defaultGenderValue='Male'
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
   console.log(form);
   this.isSubmitted=true
   this.user=new User()
    this.user.Email=form.value.email
    this.user.userName=form.value.name
    this.user.gender=form.value.gender

    form.reset(this.user)
    form.control['gender'].setValue('Male')
   }

  }

