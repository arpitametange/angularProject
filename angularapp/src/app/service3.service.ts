import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service3Service {

  constructor(private https:HttpClient) { }
  toast(){
    console.log('this is the toast');
  }
url2='https://jsonplaceholder.typicode.com/users'
getdata(){
  return this.https.get(this.url2)
}


}
