import { Injectable } from '@angular/core';
import { country } from '../countries/country';
import { Observable, of } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {
  countryList:country[] = [
    {id:1,name:'India',capital: 'Delhi'},
    {id:2,name:'Shree Lanka',capital: 'Kathmandu'},
    {id:3,name:'Japan',capital: 'Tokyo'},
  ];
  constructor(private countrtService:CountryServiceService) {

  }

  public getCountriesLIst():Observable<country[]>{
    return  of(this.countryList);
  }

  public getCountryDetail(id):Observable<country>{
    return this.getCountriesLIst().pipe(map(countries=>countries.find(country=>country.id===id)));
  }
}
