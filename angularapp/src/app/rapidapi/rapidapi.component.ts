import { Component, OnInit } from '@angular/core';
import { RapidApiService } from '../service/rapid-api.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
array:any=[{}]
arrya2:any=[]
rapidArray:any=[]
rapiquote:any=[]
matchInfo=[]
hotels:any=[]
// Inject the rapid api service
constructor(private rapidApiService: RapidApiService) { }
  ngOnInit() {
// this.rapidApiService.getDataofHotel().subscribe(res=>{
//   console.log('getting data of hotel',res);
  
// })


//     this.rapidApiService.getDataYahooFinance().subscribe( res => {
//       console.log('getting data from rapid API ', res);
// this.rapidArray=res.news
// this.rapiquote=res.quotes
// })
    // this.rapidApiService.getDataYahooFinance().subscribe( res => {
    //   console.log('getting data from rapid API ', res);
    // })

    this.rapidApiService.getDataofCricket().subscribe(res => {
      
      for(let val of res.typeMatches)
      {
        
        for(let match of val.seriesMatches) {
         
          if(match.seriesAdWrapper != undefined) {
            
            for(let matchinfo of match.seriesAdWrapper.matches) 
            {
              console.log('from crickbuzz', matchinfo.matchInfo);
              this.matchInfo = matchinfo.matchInfo;
            }
          }
        }
      }
    })
 
  
  }


}
