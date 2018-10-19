import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student:User;
  test:string="Testing";
  constructor(private route:ActivatedRoute, private userService:UserService) { 

  }
 
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.userService.getStudent(parseInt(params.get('id'))).subscribe(student=>this.student=student);
    })
    
  }

}
