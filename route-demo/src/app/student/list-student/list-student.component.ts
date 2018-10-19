import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
students:User[];
  constructor(private userServie:UserService) { }

  ngOnInit() {
    this.userServie.getStudents().subscribe(data=>this.students=data);
    console.log(this.students);
  }

}
