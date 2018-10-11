import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './InputDecorator/parent.component';
import { ChildComponent } from './InputDecorator/child.component';
import { RegisterService } from './services/register.service';
import { HttpClientModule } from '@angular/common/http';
import { BookData } from './TestData/testdata';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PersonComponent } from './ngSwitch/person.component';
import { AttributeDemo } from './AttributeDemo/attrdemo.component';
import { HomeComponent } from './RoutingDemo/home.component';
import { MessageComponent } from './RoutingDemo/message.component';
import { PhotosComponent } from './RoutingDemo/photos.component';
import { NotFoundComponent } from './RoutingDemo/notfound.componet';
import { routing } from './app.routing';
import { StudentComponent } from './student/student/student.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { ValidFormComponent } from './Validation/validForm.component';





@NgModule({
  declarations: [
    AppComponent,ParentComponent,ChildComponent,PersonComponent,AttributeDemo,
    HomeComponent,MessageComponent,PhotosComponent,NotFoundComponent, 
    StudentComponent, StudentAddComponent,ValidFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,routing
    //, InMemoryWebApiModule.forRoot(BookData)
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
