import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomuserService {
url='https://randomuser.me/api/?results=50'
  constructor(private http:HttpClient) { }
 getdata(){
  return this.http.get(this.url)
 } 
}
