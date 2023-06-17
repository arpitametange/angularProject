import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  userName;
  // inject service
  constructor(private utilityService: UtilityService) { 
    this.utilityService.userName.subscribe(res => {
      console.log('res from comp4', res );
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
