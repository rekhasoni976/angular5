import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../services/country-service.service';
import { ActivatedRoute } from '@angular/router';
import { country } from '../countries/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
country:country;
  constructor(private countryService:CountryServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    //this.country = this.route.snapshot.data['countryDetail'];

    this.route.data.subscribe(data=>{
      this.country = data.countryDetail;
    });
   
    this.route.params.subscribe(params=>{
      //console.log(params);
     // this.country=params.get('countryDetail');
      //let id = parseInt(params.get('id'));
     /// this.countryService.getCountryDetail(id).subscribe(data=>this.country=data);
    });
  }

}
