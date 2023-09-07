import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() childmethod:string
// @Output() outputdeco:EventEmitter<string>=new EventEmitter<string>
  constructor() { }
  ngOnInit() {
    console.log(this.childmethod);
    
  }
  method(){
    // this.outputdeco.emit('this is output decorator')
  }
}
