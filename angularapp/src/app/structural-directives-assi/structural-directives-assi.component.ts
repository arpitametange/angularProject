import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives-assi',
  templateUrl: './structural-directives-assi.component.html',
  styleUrls: ['./structural-directives-assi.component.css']
})
export class StructuralDirectivesAssiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// showto:boolean;
// fum(value){
//   if(this.showto){
//     console.log(value);

//   }
// }
array:Array<any>=[{course:"Angular"},
                   {course:"React"},
                  {course:"Java"},
                {course:"#c"},
              {course:".Net"},
            {course:"Python"} ]
}
