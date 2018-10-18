import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes,} from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';


const routes:Routes= [
  {
    path:'company', component:CompanyComponent
  },
  {
    path:'employee', component:EmployeeComponent
  },
  {
    path:'company', component:CompanyComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]

})
export class AppRoutingModule { }
