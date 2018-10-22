import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  constructor() { 
    console.log(sessionStorage.getItem('name'));
    console.log(localStorage.getItem('colleage'));

    sessionStorage.setItem('name','Pushkar');
    localStorage.setItem('colleage','ITM Bhilwara');

    console.log(sessionStorage.getItem('name'));
    console.log(localStorage.getItem('colleage'));
  }

  ngOnInit() {
  }

}
