import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
url='https://en.wikipedia.org/w/api.php'
  constructor(private http:HttpClient) { }

  geturl(searchQuery:string){
    let params = new HttpParams();
        params = params.append('action', 'query');
       params = params.append('format', 'json');
       params = params.append('list', 'search');
       params = params.append('utf8', '1');
       params=params.append('srsearch',searchQuery)
       params=params.append('origin','*')
    return this.http.get(this.url,{params:params}) 

  }
}
