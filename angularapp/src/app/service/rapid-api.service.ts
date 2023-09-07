import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RapidApiService {
  // hotelurl: 'https://hotels4.p.rapidapi.com/v2/get-meta-data'
  // rapidApiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete';

  cricketUrl = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent'
  headers = new HttpHeaders({
    'X-RapidAPI-Key': 'fea103a448msh80dc340112ddfb0p1e3c67jsne5b4b874c112',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  })

 

  headerhotel=new HttpHeaders({
    'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  })
  constructor(private httpClient: HttpClient) { }

//  getDataYahooFinance() : Observable<any>  {
//   let params = new HttpParams();
//     params = params.append('q', 'tesla');
//     params = params.append('region', 'US');
//     return this.httpClient.get(this.rapidApiUrl, { headers: this.headers, params: params} ) }


getDataofCricket():Observable<any>{
  let  header=new HttpHeaders({
    'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  })
  return this.httpClient.get(this.cricketUrl,{headers:header})
  .pipe(catchError(this.handleError))}

// getDataofHotel():Observable<any>{
//   return this.httpClient.get(this.hotelurl,{headers:this.headerhotel})
// }

// getDataCrickbuzz():Observable<any>{

// }



handleError(error: any) {
  let errorMessage = ''
 
  if (error.error instanceof ErrorEvent) {
    // client side error 

    errorMessage = `Error: ${error.error.message}`

    console.log('client side error getDataCrickbuzz', errorMessage);
  }
  else {
    // server-side error

    errorMessage = `Error Code: ${error.status}`
    console.log('server side error getDataCrickbuzz', errorMessage);
  }

  return throwError(errorMessage);
}


}



