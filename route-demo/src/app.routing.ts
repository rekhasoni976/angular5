import{ RouterModule} from '@angular/router';
import { StudentComponent } from './app/student/student.component';
import { ParentsComponent } from './app/parents/parents.component';
import { TeacherComponent } from './app/teacher/teacher.component';
import { LiberaryComponent } from './app/liberary/liberary.component';

import { PermissionGuard } from './app/gaurd/permission.guard';


export const routing= RouterModule.forRoot([
    {path: '', component: StudentComponent},
    {path:'student',component:StudentComponent},
    {path:'parents',component:ParentsComponent, canActivate:[PermissionGuard]},
    {path:'teachers',component:TeacherComponent},
    {path:'liberary',component:LiberaryComponent},

]);