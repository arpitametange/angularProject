import { Component, OnInit } from '@angular/core';
import { RandomuserService } from './randomuser.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-randomuser',
  templateUrl: './randomuser.component.html',
  styleUrls: ['./randomuser.component.css']
})
export class RandomuserComponent implements OnInit {

  constructor(private service:RandomuserService) { }
array:any[]=[]
  ngOnInit() {

    this.service.getdata().subscribe((res:any)=>{
      console.log(res);
      this.array=res.results
      
      console.log('i want data',res.results);
      
    })
  
//       this.service.getdata().pipe(map(respnse=>{
//         const postarray=[]
//         for(let keyy in respnse){
//           if (respnse.hasOwnProperty(keyy)) {
//             postarray.push({...respnse[keyy],name:keyy})
            
//           }
//         }
//         return postarray
//       }))
//       .subscribe((res:any)=>{
//         console.log('data of random user',res);
//         for(let t of res){
//           console.log('this si the t after for loop',t);
//           this.array=t
//         console.log('gender',t.gender);
//            let k=t.id
//           for(let t2 in t.id){
//          console.log('this is the inner data',t2);
//    this.array=t2
// }
//         }
//       })
    
   }

}

