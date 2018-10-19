import { Injectable } from '@angular/core';
import { User } from '../User';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users:User[] = [
    {'id':1,'name':'Rekha Soni',address:'Pune'},
    {'id':2,'name':'Pushkar Soni',address:'Pune'},
    {'id':3,'name':'Mukesh Soni',address:'Mandal'},
    {'id':4,'name':'Neetu Soni',address:'Shapura'},
    {'id':5,'name':'Sonu Soni',address:'Ajmer'},
    {'id':6,'name':'Ranu Soni',address:'Bundi'},
  ];
  constructor() { 

  }

  isAdminRights():boolean{
    return true;
  }
  isAdminChildRights():boolean{
    return true;
  }

  getStudents():Observable<User[]>{
    return  of(this.Users);
  }

   getStudent(id:number):Observable<User>{
    return this.getStudents().pipe(map(users=>users.find(user=>user.id===id)));
  }
}
