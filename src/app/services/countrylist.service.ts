import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountrylistService {

  constructor(private readonly http:HttpClient) { }
  loadCountryList(): Observable<any> {
     return this.http.get<any>(`https://restcountries.eu/rest/v2/all`);
  }
}
