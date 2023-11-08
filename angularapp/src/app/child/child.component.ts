import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  po:any
@Input() childmethod:string
// @Output() outputdeco:EventEmitter<string>=new EventEmitter<string>
  constructor() { }
  ngOnInit() {
    console.log(this.childmethod);
    this.po=this.childmethod
  }
  method(){
    // this.outputdeco.emit('this is output decorator')
  }
}
