import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liberary',
  templateUrl: './liberary.component.html',
  styleUrls: ['./liberary.component.css']
})
export class LiberaryComponent implements OnInit {

  constructor() { 
    console.log(sessionStorage.getItem('name'));
    console.log(localStorage.getItem('colleage'));
  }

  ngOnInit() {
  }

}
