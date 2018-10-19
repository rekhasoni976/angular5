import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { TeacherComponent } from '../teacher/teacher.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGaurdGuard implements CanDeactivate<TeacherComponent> {
  canDeactivate():boolean{
    return window.confirm('Are you sure to navigate?');
  }
  
}
