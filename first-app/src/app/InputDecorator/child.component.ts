import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RegisterService } from "../services/register.service";



@Component({
    selector: 'child',
    templateUrl: './child.component.html'
})

export class ChildComponent{
    @Input() message:string;
    @Output() notify:EventEmitter<string> = new EventEmitter<string>();
    private registerService :any;
    
    constructor(registerService: RegisterService){
        this.registerService = registerService;
    }
 
    public onClick():void{
       this.notify.emit(this.message);
    }

    public onSubmit(form:any):void{
        
        console.log(form);
        this.registerService.save();
    }

}