import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'attr-demo',
    templateUrl: './attrdemo.component.html',
    styleUrls: ['./attrdemo.component.css']
})

export class AttributeDemo implements OnInit{
    msg:string="I Am Rekha";
    color:string;
    size:number;
    displayText:string;
    visible:boolean;


     ngOnInit(){
         this.color='pink';
         this.size=20;
         this.displayText='show-class';
         this.visible=true;
     }

}