import { Component } from "@angular/core";

@Component({
    template:'<h1>{{photoMsg}}</h1>'
})

export class PhotosComponent{
    photoMsg:string="This is photos page";
}