import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {


  
  userName;
  // inject service
  constructor(private utilityService: UtilityService) { 
    this.utilityService.userName.subscribe(res => {
      console.log('res from comp1', res );
      this.userName = res;
    })
  }

  ngOnInit() {
  }

  updateUserName(uname) {
  console.log(uname.value);
  this.userName = uname.value;
 this.utilityService.userName.next(uname.value);
  }

 

}