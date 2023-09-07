import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { MyserviceService } from './service/myservice.service';
import { Service3Service } from './service3.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable, Subject, observable } from 'rxjs';
import { promise } from 'protractor';
import { resolve } from 'url';
import { error } from 'console';
import { FirebaseService } from './service/firebase.service';
import { NewpostService } from './newpost.service';
import { RapidApiService } from './service/rapid-api.service';
import { AnimationStyleMetadata } from '@angular/animations';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data : string = 'red';
  title = 'angularapp';
  no=12
  name='arpitaa'
  imgurl='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'
  isDestory: boolean = true;  
  
  constructor(private firebaseService:FirebaseService,private myService: MyserviceService, private userService: UserService,private u:Service3Service,private newpostservice:NewpostService,private rapidservice:RapidApiService,private router:Router ) {

console.log('***********constructor**********');

console.log('current route',this.router.url);
    this.firebaseService.createPost().subscribe(res=> {
      console.log('res from firebase', res);
    })
    // this.firebaseService.delete().subscribe(res=>{
    //   console.log('delted',res);
      
    // })
    this.firebaseService.createpost2().subscribe(res=>{
      console.log(res);
      
    })

  }
  
mysub=new Subject

previousevale:number

  ngOnInit(): void {
    console.log('******ngoninit****');


    this.mysub.subscribe(value=>{
      this.previousValue=value
    })
    this.mysub.next(5)
    this.mysub.next(6)

    console.log(this.previousValue,'previous value');
    

//     let body={
// id:new Date().getDate(),
// title:'this is new post',
// body:'this is the body',
// test:'kdjfka'
//     }
//     this.newpostservice.CreatePost(body).subscribe(res=>{
//       console.log(res);
      
//     })

//     this.newpostservice.getPost().subscribe(res=>{
//       console.log(res);
      
//     },error=>{
//       console.log('from component error',error);
      
//     })

    this.rapidservice.getDataofCricket().subscribe(res=>{
      console.log(res);
      
    },(error)=>{
      console.log(error);
      
    })
  }



  gettoaast(){
    this.u.toast() 
    }

  getUserData() {

    this.userService.GetUsers().subscribe(data => {
 
     console.log('user data', data);
 
    });
 
   }
  getname(){
    return this.name
  }
  changeImage(e) 
  {
    this.imgurl = e;
    console.log('catch $event', e);
  }
  func(){
    console.log('this is the function');
    
  }
   age
   showAge;
  // injecct the service

  ageCalculator() {

    this.showAge = this.myService.ageCalculator(this.age)
 
   }

   changecolor() {
    this.data = 'blue';
  }
  OnDestroy() {
    this.isDestory = false;
  }
  myVariable: any;
  previousValue: any;

  onInputChange() {
    // Access the previous value
    console.log('Previous value:', this.previousValue);
    
    // Update the previous value with the current value
    this.previousValue = this.myVariable;
  }
  handleBubbling(event: MouseEvent) {
    console.log('Bubbling: Event handled by', (event.target as HTMLElement).id);
  }


  handleCapturing(event: MouseEvent) {
    console.log('Capturing: Event handled by', (event.target as HTMLElement).id);
  }



  

  }
  

  

  