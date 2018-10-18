import { Routes } from '@angular/router';
import {AdminComponent} from  './admin/admin.component';
//import {HomeComponent} from './home/home.component';
import {ActivateGuard} from './activate.guard';
import {MerchantComponent} from './merchant/merchant.component'

export const Approutes:Routes=
[
    {path:'', component:MerchantComponent},
    {path:'merchant', component:MerchantComponent},
    {path:'admin', component:AdminComponent,canActivate:[ActivateGuard]},

]