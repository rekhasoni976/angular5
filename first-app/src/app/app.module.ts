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




@NgModule({
  declarations: [
    AppComponent,ParentComponent,ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, InMemoryWebApiModule.forRoot(BookData)
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
