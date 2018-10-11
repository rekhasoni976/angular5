import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './RoutingDemo/home.component';
import { MessageComponent } from './RoutingDemo/message.component';
import { PhotosComponent } from './RoutingDemo/photos.component';
import { NotFoundComponent } from './RoutingDemo/notfound.componet';
import { StudentComponent } from './student/student/student.component';
import { StudentAddComponent } from './student/student-add/student-add.component';

export const routing= RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path:'message', component: MessageComponent},
    {path:'photos', component: PhotosComponent},
    {path:'student', children: [
        {path:'add',component:StudentAddComponent},
        {path:'list',component:StudentComponent},
    ]},
    {path:'**', component: NotFoundComponent},

]);