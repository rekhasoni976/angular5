import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ParentsComponent } from './parents/parents.component';
import { LiberaryComponent } from './liberary/liberary.component';
import { routing } from 'src/app.routing';
import { UserService } from './services/user.service';
import { PermissionGuard } from './gaurd/permission.guard';
import { DeactivateGaurdGuard } from './gaurd/deactivate-gaurd.guard';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { ActivateChildGaurdGuard } from './gaurd/activate-child-gaurd.guard';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    ParentsComponent,
    LiberaryComponent,
    AddStudentComponent,
    ListStudentComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [UserService, PermissionGuard, DeactivateGaurdGuard, ActivateChildGaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
