import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  userName;
  // inject service
  constructor(private utilityService: UtilityService) { 
    this.utilityService.userName.subscribe(res => {
      console.log('res from comp3', res );
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
