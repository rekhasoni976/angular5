import { Component } from "@angular/core";

@Component({
    selector: 'parent',
    templateUrl: 'parent.component.html'
})

export class ParentComponent{
    message:string= "Hiii i am rekha";

    onNotify(message: string):void{
        this.message = message;
    }
}