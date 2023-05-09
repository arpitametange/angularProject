import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {
namee:string="mettange"
sele:string="appi"
  constructor() { }

  ngOnInit() {
  }
  create(g){
console.log(g);
}

array:Array<any>=[{'name':"arpita"},{"name":"shravani"}]
}
