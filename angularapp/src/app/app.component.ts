import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { MyserviceService } from './service/myservice.service';
import { Service3Service } from './service3.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { resolve } from 'url';
import { error } from 'console';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data : string = 'red';
  title = 'angularapp';
  no=12
  name='arpitaa'
  imgurl='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'
  isDestory: boolean = true;
  
  constructor(private firebaseService:FirebaseService,private myService: MyserviceService, private userService: UserService,private u:Service3Service) {

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
}
  

