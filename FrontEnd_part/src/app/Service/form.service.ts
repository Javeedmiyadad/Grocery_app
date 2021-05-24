import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { country } from '../models/country';
import { map } from 'rxjs/operators';
import { state } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private countriesUrl = 'http://localhost:8080/api/v1/countries';
  private statesUrl = 'http://localhost:8080/api/v1/states';

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<country[]> {

    return this.httpClient.get<GetResponseCountries>(this.countriesUrl).pipe(
      map(response => response._embedded.countries)
    );
  }

  getStates(theCountryCode: string): Observable<state[]> {

    // search url
    const searchStatesUrl = `${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`;

    return this.httpClient.get<GetResponseStates>(searchStatesUrl).pipe(
      map(response => response._embedded.states)
    );
  }


  getCreditCardMonths(startMonth: number): Observable<number[]> {

    let data: number[] = [];
    
    // build an array for "Month" dropdown list
    // - start at current month and loop until 

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {

    let data: number[] = [];

    // build an array for "Year" downlist list
    // - start at current year and loop for next 10 years
    
    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }

    return of(data);
  }

}

interface GetResponseCountries {
  _embedded: {
    countries: country[];
  }
}

interface GetResponseStates {
  _embedded: {
    states: state[];
  }
}