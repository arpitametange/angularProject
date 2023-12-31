import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private firebaseService: FirebaseService, private authService: AuthService) { }

  ngOnInit() {
    // this.firebaseService.getPostData().subscribe(res=> {
    //   console.log('get data from firebase', res);
    // })
  }
  GotoProduct(){
    this.router.navigate(['product']);
  }

  checkUser(username, password) {
   var output = this.authService.checkUserNameandPassword(username, password);
   console.log('output', output);
   
   if (output) {
    this.router.navigate(['product']);
   } else {
    alert('Invalid user name and password')
   }
  }

}
