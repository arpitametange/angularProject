import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownnService {
urlapi="http://awsmaster.mahamining.com/master/states/GetState"
divisionsApi = "http://awsmaster.mahamining.com/master/divisions"
districtApi ="http://awsmaster.mahamining.com/master/districts/GetDistrictByDivisionId?UserId=1&DivisionId=id"
talukaApi ="http://awsmaster.mahamining.com/master/talukas/GetTalukaByDistrictId/id"

  constructor(private https:HttpClient
    ) { }
    State():Observable<any>{
    return this.https.get(this.urlapi)
   } 

Division(id:string){
const url=`${this.urlapi}/divisions/${id}`
  return this.https.get(url)
}

edit(id,data){
  let APIURL=`${this.State}`
  return this.https.put(APIURL,id,data)
}
create(data){
  let APICREATE=this.urlapi
  return this.https.put(APICREATE,data)
}


}
