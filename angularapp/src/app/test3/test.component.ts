import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector:'selector',
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css']
})
export class TestComponent2 implements OnInit{
    @Input() nameInput:string
  ngOnInit(): void {
      console.log(this.nameInput);
      
  }
  @Output() childoutput:EventEmitter<string>=new EventEmitter<string>();
childfun(){
    this.childoutput.emit("this is hte second things")
}
}