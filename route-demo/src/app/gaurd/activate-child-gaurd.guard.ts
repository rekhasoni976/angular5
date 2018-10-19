import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateChildGaurdGuard implements CanActivateChild {
  constructor(private userservice:UserService, private router:Router){

  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.userservice.isAdminChildRights()){
      return true;
    }else{
      alert("Hi This is rekha soni from pune");
      this.router.navigate(['liberary']);
    }
  }
}
