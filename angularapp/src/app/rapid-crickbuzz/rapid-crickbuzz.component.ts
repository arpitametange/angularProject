import { Component, OnInit } from '@angular/core';
import { RapidApiService } from '../service/rapid-api.service';

@Component({
  selector: 'app-rapid-crickbuzz',
  templateUrl: './rapid-crickbuzz.component.html',
  styleUrls: ['./rapid-crickbuzz.component.css']
})
export class RapidCrickbuzzComponent implements OnInit {
  // array=[]
  // arrya2=[]
  matches:any=[];
  matchAryy:any=[]
  constructor(private rapidservice:RapidApiService) { }

    ngOnInit() {
    this.cricket()    
}
    cricket(){
    this.rapidservice.getDataofCricket().subscribe(res=>{
    this.matches = res.matchInfo
    this.matchAryy = res.typeMatches.matches
    console.log('Cricket Data',this.matches );
    
  })
}
}
