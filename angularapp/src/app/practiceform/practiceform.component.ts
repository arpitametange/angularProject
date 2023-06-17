import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './userpractice';

@Component({
  selector: 'app-practiceform',
  templateUrl: './practiceform.component.html',
  styleUrls: ['./practiceform.component.css']
})
export class PracticeformComponent implements OnInit {

  constructor() { }
user:User
isSubm;
  ngOnInit() {
  }
onSubmit(val:NgForm):void{
 this.isSubm=true
  console.log(val);
  this.user=new User
  this.user.userName=val.value.username
  this.user.Email=val.value.email
  
}
}
