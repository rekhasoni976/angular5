import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log (JSON.parse(localStorage.getItem('localData')));
    //console.log(localStorage.getItem('localData'));
    console.log(sessionStorage.getItem('sessionData'));

    if(sessionStorage.length>0)
    {
      alert("data is available");
    }
    else
    {
      alert("data is not available");
    }

    if(window.localStorage)
    {
      alert("supported");
    }
  }

}
