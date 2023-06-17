import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { error } from 'console';
import { Service3Service } from '../service3.service';


@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor(private user:UserService,private user2:Service3Service) { }
  showMe = true;
  ngOnInit() {

    const ob= new Observable((observer)=>{
      console.log('this is the observable');
      observer.next('1')
      observer.next('2')
      observer.next('3')
      observer.next('4')
    
    })
    // ob.subscribe(val =>{
    //   console.log(val);
      
    // })

    ob.subscribe(val=>{console.log(val);
    },
    (error:any)=>{
      console.log('error');
      
    },
    ()=>{
      console.log('completed');
      
    }
    )
    
    
// this.user.GetUsers().subscribe((val)=>{
// console.log(val);

// })

this.user.GetUsers().subscribe((val)=>{console.log(val)},
(error:any)=>{console.log('this error'),
()=>{console.log('completed');
}
})

this.user2.getdata().subscribe((val)=>{
  console.log(val);
  
})
}
}
