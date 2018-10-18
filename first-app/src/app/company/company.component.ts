import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let obj={fname:'Rekha',lname:'Soni'}
    localStorage.setItem('localData',JSON.stringify(obj));
    //localStorage.setItem('localData','local-Rekha');
    sessionStorage.setItem('sessionData','session-pushkar');

    sessionStorage.clear();

    //localStorage.removeItem('localData');
    //localStorage.clear();

    console.log (JSON.parse(localStorage.getItem('localData')));
    console.log(sessionStorage.getItem('sessionData'));

  }

}
