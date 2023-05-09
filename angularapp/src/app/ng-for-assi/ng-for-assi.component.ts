import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-assi',
  templateUrl: './ng-for-assi.component.html',
  styleUrls: ['./ng-for-assi.component.css']
})
export class NgForAssiComponent implements OnInit {
ngOnInit(): void {
  
}
  
country=[
 {id:'1',name:"India"} ,
 {id:'2', name:"USA"}
]

countryState:Array<any>=[
  {id:'s1',parentId:"1",name:"maharashtra"},
  {id:'s2',parentId:"1",name:"Goa"},
  {id:'s3',parentId:"1",name:"Gujarat"},
  {id:'s4',parentId:"2",name:"california"},
  {id:'s5',parentId:"2",name:"texas"},
  {id:'s6',parentId:"2",name:"florida"}
]
state:Array<any>=[]
clickfun1(val:any){
  this.state=this.countryState.filter(c=>c.parentId==val.target.value)

}




countries=[
  {id:'1',name:'India'},
  {id:'2',name:'United State'}
 ]
 arrStates: Array<any>= [
  {id:'s1',parentId:'2',name:'California'},
  {id:'s2',parentId:'2',name:'Texas'},
  {id:'s3',parentId:'2',name:'Florida'},
  {id:'s4',parentId:'1',name:'Maharashtra'},
  {id:'s5',parentId:'1',name:'Goa'},
  {id:'s6',parentId:'1',name:'Chennai'},
 ]

 states : Array<any> = [];
onClick(val: any) {
  this.states = this.arrStates.filter(c => c.parentId == val.target.value);
 }
}
