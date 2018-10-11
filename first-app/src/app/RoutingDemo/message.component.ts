import { Component } from "@angular/core";

@Component({
    template:'<h1>{{message}}</h1>'
})

export class MessageComponent{
    message:string="This is message page";
}