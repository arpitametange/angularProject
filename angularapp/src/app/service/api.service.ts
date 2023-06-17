import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://awsmaster.mahamining.com/master';

  constructor(private http: HttpClient) { }

 

  getDivisionsByStateId(id: string): Observable<any> {
    const url = `${this.baseUrl}/divisions/${id}`;
    return this.http.get(url);
  }

  getDistrictsByDivisionId(stateId: string, divisionId: string): Observable<any> {
    const url = `${this.baseUrl}/districts/GetDistrictByDivisionId?UserId=${stateId}&DivisionId=${divisionId}`;
    return this.http.get(url);
  }

  getTalukasByDistrictId(id: string): Observable<any> {
    const url = `${this.baseUrl}/talukas/GetTalukaByDistrictId/${id}`;
    return this.http.get(url);
  }

  getVillagesByCriteria(id: string): Observable<any> {
    const url = `${this.baseUrl}/villages/GetVillagesByCriteria/${id}`;
    return this.http.get(url);
  }
}
