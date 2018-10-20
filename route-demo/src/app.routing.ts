import{ RouterModule} from '@angular/router';
import { StudentComponent } from './app/student/student.component';
import { ParentsComponent } from './app/parents/parents.component';
import { TeacherComponent } from './app/teacher/teacher.component';
import { LiberaryComponent } from './app/liberary/liberary.component';

import { PermissionGuard } from './app/gaurd/permission.guard';
import { DeactivateGaurdGuard } from './app/gaurd/deactivate-gaurd.guard';
import { AddStudentComponent } from './app/student/add-student/add-student.component';
import { ListStudentComponent } from './app/student/list-student/list-student.component';
import { ActivateChildGaurdGuard } from './app/gaurd/activate-child-gaurd.guard';
import { StudentDetailComponent } from './app/student/student-detail/student-detail.component';
import { CountryListComponent } from './app/countries/country-list/country-list.component';
import { CountryDetailComponent } from './app/country-detail/country-detail.component';
import { countryResolver } from './app/resolver/contry.resolver';


export const routing= RouterModule.forRoot([
    {path: '', component: StudentComponent},
    {path:'student',component:ListStudentComponent,canActivateChild:[ActivateChildGaurdGuard],
        children:[
            {path: 'add-student', component: AddStudentComponent},
            {path: 'student-detail/:id', component: StudentDetailComponent}
        ]
    },
    {path:'parents',component:ParentsComponent, canActivate:[PermissionGuard]},
    {path:'teachers',component:TeacherComponent, canDeactivate:[DeactivateGaurdGuard]},
    {path:'liberary',component:LiberaryComponent},
    {path:'countries',component:CountryListComponent,
        children:[ {
                    path:'detail/:id',component:CountryDetailComponent,
                    resolve:{
                        countryDetail:countryResolver
                    }
                    }]
    },

   


    

]);