import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { CountryServiceService } from "../services/country-service.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { country } from "../countries/country";

@Injectable()
export class countryResolver implements Resolve<any>{

    constructor(private countryService:CountryServiceService, private router:Router){

    }
    
    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<country>{
        let id = parseInt(route.paramMap.get('id'));

        return this.countryService.getCountryDetail(id).pipe(map(country=>{
            if(country){
                return country;
            }else{
                alert('Conutry not exits');
                this.router.navigate(['/countries']);
            }
        }));
    }

}