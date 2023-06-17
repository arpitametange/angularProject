import { Component, OnInit } from '@angular/core';
import { CricketinfoService } from '../service/cricketinfo.service';

@Component({
  selector: 'app-cricketinfo',
  templateUrl: './cricketinfo.component.html',
  styleUrls: ['./cricketinfo.component.css']
})
export class CricketinfoComponent implements OnInit {
matchInfo
// counter=1
venue
team1
team2
  constructor(private service:CricketinfoService) { }

  ngOnInit() {
   this.getdataa()
  }
getdataa(){
  this.service.get().subscribe(res=>{
    console.log('this is the cricket info',res);
    // this.matchinfo=res.matchInfo.series[0]
    // this.matchInfo=res.matchInfo
    this.venue = res.venueInfo;
    this.matchInfo = res.matchInfo;
    this.team1 = this.matchInfo.team1;
    this.team2 = this.matchInfo.team2;
    console.log("Team 1", this.team1);
    console.log("Team 2", this.team2);


  })
}

}
