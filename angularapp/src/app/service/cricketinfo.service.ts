import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CricketinfoService {
url='https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881'
  constructor(private http:HttpClient) { }
header=new HttpHeaders({
  'X-RapidAPI-Key': '38d64a2a1bmshb4d4947595c94edp196e22jsncc07eac18ada',
  'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'

})



get():Observable<any>{
  return this.http.get(this.url,{headers:this.header})
  }
}

