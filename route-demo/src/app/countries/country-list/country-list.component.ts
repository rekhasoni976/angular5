import { Component, OnInit } from '@angular/core';
import { country } from '../country';
import { CountryServiceService } from 'src/app/services/country-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries:country[];

  constructor(private countryService:CountryServiceService) {
    sessionStorage.setItem('name','Rekha');
    localStorage.setItem('colleage','MLVTI Bhilwara');

    console.log(sessionStorage.getItem('name'));
    console.log(localStorage.getItem('colleage'));
   }

  ngOnInit() {
    this.countryService.getCountriesLIst().subscribe(data=>this.countries=data);
  }

}
