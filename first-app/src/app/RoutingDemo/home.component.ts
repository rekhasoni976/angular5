import { Component } from "@angular/core";

@Component({
    template:'<h1>{{msg}}</h1>'
})

export class HomeComponent{
    msg:string="This is the home page";
}