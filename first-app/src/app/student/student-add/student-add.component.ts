import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studentRegistration:any;
  submitted:boolean;
  //value:any;
  /* constructor(private formbuilder:FormBuilder) { 
    this.studentRegistration= this.formbuilder.group({
      first_name: ['', Validators.required],
      Last_name: ['', Validators.required],
      Email: ['', Validators.required],
      phone: ['', Validators.required],
      address: this.formbuilder.group({
        street: ['', Validators.required],
        pincode: ['', Validators.required],
        city: ['', Validators.required],
      })
  
    });

  } */

  ngOnInit() {
    
  this.studentRegistration= new FormGroup({
    first_name: new FormControl(""),
    Last_name: new FormControl(""),
    Email: new FormControl(""),
    phone: new FormControl(""),
    address: new FormGroup({
      street: new FormControl(""),
      pincode: new FormControl(""),
      city: new FormControl(""),
    })

  });
  }
  save(fvalue){
    
   console.log(fvalue);
 }
}
