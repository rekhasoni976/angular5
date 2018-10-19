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


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    ParentsComponent,
    LiberaryComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [UserService, PermissionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
