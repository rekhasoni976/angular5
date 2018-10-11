import { Component } from "@angular/core";

@Component({
    selector:'app-switch',
    templateUrl: './person.component.html',
    styleUrls:['./person.component.css']
})

export class PersonComponent{
    people:any[];
    constructor(){
        this.people = [
            {
                id:101,
                name:"Rekha",
                salary:25000,
                country:"UK"
            },
            {
                id:102,
                name:"pshkar",
                salary:80000,
                country:"USA"
            },
            {
                id:101,
                name:"anubhav",
                salary:20000,
                country:"India"
            }

        ]
    }
}
